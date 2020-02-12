export const colors = {
  primary: "#FFD400",
  secondary: "#3482B9",
  positive: "#49C04A",
  negative: "#D03930",
  neutral: "#AAA",
  light: "#ABE0F9",
  muted: "#EAEAEA",
  hotpink: "#FC8BA4",
  black: "#333",
  white: "#FFF",
  gray: "#CCC",
  dark: "#666",
  shadow: "rgba(0, 0, 0, 0.4)"
} as const;

export const radii = {
  default: "0.2em",
  sm: "0.1em",
  md: "0.2em",
  lg: "0.3em",
  xl: "0.4em",
  xxl: "0.6em",
  xxxl: "1em",
  round: "50%"
} as const;

export const shadows = {
  default: `0 1px 2px ${colors.shadow}`,
  inset: `inset 1px 0 2px`,
  top: `0 -2px 6px ${colors.shadow}`,
  none: "none"
} as const;

export const fontFamilies = {
  display: "'Major Mono Display', monospace",
  default: "'Lato', sans-serif",
  voice: "'Vollkorn', serif"
};

const baseFontSize = 18;

export const fontSizes = {
  default: baseFontSize,
  sm: baseFontSize * 0.8,
  md: baseFontSize,
  lg: baseFontSize * 1.2
} as const;

const theme = {
  colors,
  radii,
  fontSizes,
  fontFamilies,
  shadows
} as const;

export type Color = keyof typeof colors;

export type Radius = keyof typeof radii;

export type FontSize = keyof typeof fontSizes;

export type FontFamily = keyof typeof fontFamilies;

export type Theme = typeof theme;

export default theme;
