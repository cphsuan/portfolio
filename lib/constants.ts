export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const SCROLL_CONFIG = {
  HEADER_BLUR_THRESHOLD: 20,
  SMOOTH_SCROLL_BEHAVIOR: 'smooth' as ScrollBehavior,
} as const

export const ANIMATION_CONFIG = {
  THEME_TRANSITION_DURATION: 200,
  MOBILE_MENU_DURATION: 300,
  HOVER_TRANSITION: 150,
} as const

export const LAYOUT_CONFIG = {
  HEADER_HEIGHT_DESKTOP: 64,
  HEADER_HEIGHT_MOBILE: 56,
  MOBILE_MENU_WIDTH: 250,
  MOBILE_MENU_WIDTH_SM: 300,
} as const