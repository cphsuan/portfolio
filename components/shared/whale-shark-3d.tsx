'use client'
import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'
import Delaunator from 'delaunator'

/**
 * Top‑down whale shark as a geometric line drawing using
 * @react-three/fiber + Delaunator triangulation.
 *
 * How it works
 * 1) Define a 2D silhouette polygon (rough whale‑shark shape from above).
 * 2) Sprinkle interior sample points (only those inside the polygon).
 * 3) Delaunay‑triangulate boundary + interior points.
 * 4) Draw all unique triangle edges as line segments – producing
 *    the low‑poly, geometric wire look.
 */

/** Ray‑casting point‑in‑polygon */
function pointInPolygon(pt: [number, number], polygon: [number, number][]) {
  const [x, y] = pt
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0],
      yi = polygon[i][1]
    const xj = polygon[j][0],
      yj = polygon[j][1]
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 1e-9) + xi
    if (intersect) inside = !inside
  }
  return inside
}

/** Build a whale‑shark polygon in 2D (top‑down). Units are arbitrary. */
function buildWhaleSharkOutline(): [number, number][] {
  // Main body outline with much bigger head and shortened body
  const outline: [number, number][] = [
    // Head (front, right side, clockwise) - Made much bigger
    [3.2, 0.0], // Extended snout further
    [2.9, 0.6], // Much wider head top
    [2.5, 1.0], // Very broad head
    [2.0, 1.2], // Massive head curve
    [1.4, 1.1], // Pectoral base right - bigger head
    // Right body - shortened
    [0.6, 0.7], // Moved inward
    [0.0, 0.5], // Shortened body
    [-0.6, 0.3], // Compressed body
    [-1.2, 0.2], // Shortened middle
    // Peduncle to tail - moved closer
    [-1.6, 0.15], // Shortened peduncle
    [-1.9, 0.2], // Closer tail connection
    [-2.2, 0.4], // Upper tail lobe
    [-2.4, 0.5],
    [-2.5, 0.3],
    [-2.3, 0.0], // Tail center
    // Lower tail lobe
    [-2.5, -0.3],
    [-2.4, -0.5],
    [-2.2, -0.4],
    [-1.9, -0.2], // Closer tail connection
    [-1.6, -0.15], // Shortened peduncle
    // Left side body up - shortened
    [-1.2, -0.2], // Shortened middle
    [-0.6, -0.3], // Compressed body
    [0.0, -0.5], // Shortened body
    [0.6, -0.7], // Moved inward
    [1.4, -1.1], // Pectoral base left - bigger head
    // Up to head left - Made much bigger
    [2.0, -1.2], // Massive head curve
    [2.5, -1.0], // Very broad head
    [2.9, -0.6], // Much wider head bottom
  ]
  return outline
}

/** Build separate pectoral fins */
function buildPectoralFins(): {
  left: [number, number][]
  right: [number, number][]
} {
  const rightFin: [number, number][] = [
    [1.4, 1.1], // Base at body - adjusted for much bigger head
    [1.2, 1.5], // Mid fin - extended for bigger head
    [0.7, 1.7], // Tip - extended proportionally
    [1.0, 1.3], // Back edge - adjusted
  ]

  const leftFin: [number, number][] = [
    [1.4, -1.1], // Base at body - adjusted for much bigger head
    [1.2, -1.5], // Mid fin - extended for bigger head
    [0.7, -1.7], // Tip - extended proportionally
    [1.0, -1.3], // Back edge - adjusted
  ]

  return { left: leftFin, right: rightFin }
}

/** Build separate caudal (tail) fin */
function buildCaudalFin(): [number, number][] {
  const tailFin: [number, number][] = [
    // Base connection point
    [-2.5, 0.0],
    // Upper lobe
    [-2.6, 0.25],
    [-2.9, 0.5],
    [-3.1, 0.6],
    [-3.2, 0.4],
    [-3.0, 0.0],
    // Lower lobe
    [-3.2, -0.4],
    [-3.1, -0.6],
    [-2.9, -0.5],
    [-2.6, -0.25],
  ]

  return tailFin
}

function triangulateWhaleShark({ density = 280, jitter = 0.25 }) {
  const outline = buildWhaleSharkOutline()

  // Collect boundary points densely along edges so the triangulation
  // respects the outline nicely.
  const boundary = []
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i]
    const b = outline[(i + 1) % outline.length]
    const segLen = Math.hypot(b[0] - a[0], b[1] - a[1])
    const steps = Math.max(2, Math.floor(segLen * 12))
    for (let s = 0; s < steps; s++) {
      const t = s / steps
      boundary.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t])
    }
  }

  // Bounding box for sampling
  const xs = outline.map((p) => p[0])
  const ys = outline.map((p) => p[1])
  const minX = Math.min(...xs),
    maxX = Math.max(...xs)
  const minY = Math.min(...ys),
    maxY = Math.max(...ys)

  // Sample interior points on a jittered grid
  const interior = []
  const grid = Math.sqrt(density)
  for (let gx = 0; gx < grid; gx++) {
    for (let gy = 0; gy < grid; gy++) {
      const u = gx / (grid - 1)
      const v = gy / (grid - 1)
      const px = minX + (maxX - minX) * u + (Math.random() - 0.5) * jitter
      const py = minY + (maxY - minY) * v + (Math.random() - 0.5) * jitter
      if (pointInPolygon([px, py], outline)) interior.push([px, py])
    }
  }

  const points = [...boundary, ...interior]
  const flat = points.flat()
  const delaunay = Delaunator.from(points)

  // Build unique edges from triangles, but only keep edges that are fully inside the outline
  const edgeKey = (i: number, j: number) => (i < j ? `${i}-${j}` : `${j}-${i}`)
  const edges = new Map()

  for (let i = 0; i < delaunay.triangles.length; i += 3) {
    const a = delaunay.triangles[i]
    const b = delaunay.triangles[i + 1]
    const c = delaunay.triangles[i + 2]

    // Get the actual coordinates for each vertex
    const ptA: [number, number] = [flat[a * 2], flat[a * 2 + 1]]
    const ptB: [number, number] = [flat[b * 2], flat[b * 2 + 1]]
    const ptC: [number, number] = [flat[c * 2], flat[c * 2 + 1]]

    // Check if triangle centroid is inside the outline (filters out external triangles)
    const centroidX = (ptA[0] + ptB[0] + ptC[0]) / 3
    const centroidY = (ptA[1] + ptB[1] + ptC[1]) / 3

    if (pointInPolygon([centroidX, centroidY], outline)) {
      // Only add edges from triangles that are clearly inside the fish
      edges.set(edgeKey(a, b), [a, b])
      edges.set(edgeKey(b, c), [b, c])
      edges.set(edgeKey(c, a), [c, a])
    }
  }

  // Convert edges to Float32Array of positions for LineSegments
  const positions = new Float32Array(edges.size * 2 * 3)
  let ptr = 0
  for (const [_, [i, j]] of edges) {
    const ax = flat[i * 2],
      ay = flat[i * 2 + 1]
    const bx = flat[j * 2],
      by = flat[j * 2 + 1]
    positions[ptr++] = ax
    positions[ptr++] = 0
    positions[ptr++] = ay
    positions[ptr++] = bx
    positions[ptr++] = 0
    positions[ptr++] = by
  }

  // Outline (to ensure the outer border looks crisp)
  const outlinePos = new Float32Array(outline.length * 2 * 3)
  for (let i = 0; i < outline.length; i++) {
    const a = outline[i]
    const b = outline[(i + 1) % outline.length]
    outlinePos[i * 6 + 0] = a[0]
    outlinePos[i * 6 + 1] = 0
    outlinePos[i * 6 + 2] = a[1]
    outlinePos[i * 6 + 3] = b[0]
    outlinePos[i * 6 + 4] = 0
    outlinePos[i * 6 + 5] = b[1]
  }

  return { positions, outlinePos }
}

function WhaleSharkWire({ density = 260, lineWidth = 1 }) {
  const meshRef = useRef<THREE.Group>(null)
  const { theme } = useTheme()

  // Floating animation only
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating up and down
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2
      // Subtle side-to-side drift
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  const lineColor = theme === 'dark' ? '#ffffff' : '#000000'
  const { positions, outlinePos } = useMemo(
    () => triangulateWhaleShark({ density }),
    [density]
  )

  // Geometry for inner triangulation
  const innerGeom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])

  // Geometry for border outline
  const outlineGeom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(outlinePos, 3))
    return g
  }, [outlinePos])

  // Create pectoral fins with triangulation
  const { leftFinGeom, rightFinGeom, leftFinTriGeom, rightFinTriGeom } =
    useMemo(() => {
      const fins = buildPectoralFins()

      // Function to triangulate a fin
      const triangulateFin = (finOutline: [number, number][]) => {
        // Add interior points for triangulation
        const boundary = []
        for (let i = 0; i < finOutline.length; i++) {
          const a = finOutline[i]
          const b = finOutline[(i + 1) % finOutline.length]
          const segLen = Math.hypot(b[0] - a[0], b[1] - a[1])
          const steps = Math.max(2, Math.floor(segLen * 8))
          for (let s = 0; s < steps; s++) {
            const t = s / steps
            boundary.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t])
          }
        }

        // Add interior points
        const xs = finOutline.map((p) => p[0])
        const ys = finOutline.map((p) => p[1])
        const minX = Math.min(...xs),
          maxX = Math.max(...xs)
        const minY = Math.min(...ys),
          maxY = Math.max(...ys)

        const interior = []
        const gridSize = 4 // Smaller grid for fins
        for (let gx = 0; gx < gridSize; gx++) {
          for (let gy = 0; gy < gridSize; gy++) {
            const u = gx / (gridSize - 1)
            const v = gy / (gridSize - 1)
            const px = minX + (maxX - minX) * u + (Math.random() - 0.5) * 0.1
            const py = minY + (maxY - minY) * v + (Math.random() - 0.5) * 0.1
            if (pointInPolygon([px, py], finOutline)) {
              interior.push([px, py])
            }
          }
        }

        const points = [...boundary, ...interior]
        if (points.length < 3) return new Float32Array(0)

        const flat = points.flat()
        const delaunay = Delaunator.from(points)

        // Build edges with centroid filtering
        const edgeKey = (i: number, j: number) =>
          i < j ? `${i}-${j}` : `${j}-${i}`
        const edges = new Map()

        for (let i = 0; i < delaunay.triangles.length; i += 3) {
          const a = delaunay.triangles[i]
          const b = delaunay.triangles[i + 1]
          const c = delaunay.triangles[i + 2]

          const ptA: [number, number] = [flat[a * 2], flat[a * 2 + 1]]
          const ptB: [number, number] = [flat[b * 2], flat[b * 2 + 1]]
          const ptC: [number, number] = [flat[c * 2], flat[c * 2 + 1]]

          const centroidX = (ptA[0] + ptB[0] + ptC[0]) / 3
          const centroidY = (ptA[1] + ptB[1] + ptC[1]) / 3

          if (pointInPolygon([centroidX, centroidY], finOutline)) {
            edges.set(edgeKey(a, b), [a, b])
            edges.set(edgeKey(b, c), [b, c])
            edges.set(edgeKey(c, a), [c, a])
          }
        }

        // Convert to positions
        const positions = new Float32Array(edges.size * 2 * 3)
        let ptr = 0
        for (const [_, [i, j]] of edges) {
          const ax = flat[i * 2],
            ay = flat[i * 2 + 1]
          const bx = flat[j * 2],
            by = flat[j * 2 + 1]
          positions[ptr++] = ax
          positions[ptr++] = 0
          positions[ptr++] = ay
          positions[ptr++] = bx
          positions[ptr++] = 0
          positions[ptr++] = by
        }

        return positions
      }

      // Create outline geometries
      const rightPositions = new Float32Array(fins.right.length * 2 * 3)
      for (let i = 0; i < fins.right.length; i++) {
        const a = fins.right[i]
        const b = fins.right[(i + 1) % fins.right.length]
        rightPositions[i * 6 + 0] = a[0]
        rightPositions[i * 6 + 1] = 0
        rightPositions[i * 6 + 2] = a[1]
        rightPositions[i * 6 + 3] = b[0]
        rightPositions[i * 6 + 4] = 0
        rightPositions[i * 6 + 5] = b[1]
      }

      const leftPositions = new Float32Array(fins.left.length * 2 * 3)
      for (let i = 0; i < fins.left.length; i++) {
        const a = fins.left[i]
        const b = fins.left[(i + 1) % fins.left.length]
        leftPositions[i * 6 + 0] = a[0]
        leftPositions[i * 6 + 1] = 0
        leftPositions[i * 6 + 2] = a[1]
        leftPositions[i * 6 + 3] = b[0]
        leftPositions[i * 6 + 4] = 0
        leftPositions[i * 6 + 5] = b[1]
      }

      // Create triangulation geometries
      const rightTriPositions = triangulateFin(fins.right)
      const leftTriPositions = triangulateFin(fins.left)

      const rightGeom = new THREE.BufferGeometry()
      rightGeom.setAttribute(
        'position',
        new THREE.BufferAttribute(rightPositions, 3)
      )

      const leftGeom = new THREE.BufferGeometry()
      leftGeom.setAttribute(
        'position',
        new THREE.BufferAttribute(leftPositions, 3)
      )

      const rightTriGeom = new THREE.BufferGeometry()
      rightTriGeom.setAttribute(
        'position',
        new THREE.BufferAttribute(rightTriPositions, 3)
      )

      const leftTriGeom = new THREE.BufferGeometry()
      leftTriGeom.setAttribute(
        'position',
        new THREE.BufferAttribute(leftTriPositions, 3)
      )

      return {
        leftFinGeom: leftGeom,
        rightFinGeom: rightGeom,
        leftFinTriGeom: leftTriGeom,
        rightFinTriGeom: rightTriGeom,
      }
    }, [])

  return (
    <group ref={meshRef}>
      {/* Main body triangulation */}
      <lineSegments geometry={innerGeom}>
        <lineBasicMaterial
          color={lineColor}
          linewidth={lineWidth}
          transparent
          opacity={0.8}
        />
      </lineSegments>

      {/* Body outline */}
      <lineSegments geometry={outlineGeom}>
        <lineBasicMaterial
          color={lineColor}
          linewidth={lineWidth}
          transparent
          opacity={0.9}
        />
      </lineSegments>

      {/* Separate pectoral fins with triangulation */}

      {/* Right fin outline */}
      <lineSegments geometry={rightFinGeom}>
        <lineBasicMaterial
          color={lineColor}
          linewidth={lineWidth}
          transparent
          opacity={0.9}
        />
      </lineSegments>

      {/* Right fin triangulation */}
      <lineSegments geometry={rightFinTriGeom}>
        <lineBasicMaterial
          color={lineColor}
          linewidth={lineWidth}
          transparent
          opacity={0.7}
        />
      </lineSegments>

      {/* Left fin outline */}
      <lineSegments geometry={leftFinGeom}>
        <lineBasicMaterial
          color={lineColor}
          linewidth={lineWidth}
          transparent
          opacity={0.9}
        />
      </lineSegments>

      {/* Left fin triangulation */}
      <lineSegments geometry={leftFinTriGeom}>
        <lineBasicMaterial
          color={lineColor}
          linewidth={lineWidth}
          transparent
          opacity={0.7}
        />
      </lineSegments>
    </group>
  )
}

export function WhaleSharkScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 4, 7], fov: 65 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // Device pixel ratio for high-DPI screens
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        {/* Center and rotate slightly so the shark presents nicely */}
        <group
          rotation={[-Math.PI / 2.5, 0.2, 0]}
          position={[0, 0, 0]}
          scale={[1.4, 1.4, 1.4]}
        >
          <WhaleSharkWire density={120} />
        </group>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          autoRotateSpeed={0}
        />
      </Canvas>
    </div>
  )
}
