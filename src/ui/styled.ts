import styled, {
  css as baseCSS,
  ThemedCssFunction,
  ThemedStyledInterface,
  ThemeProps as BaseThemeProps,
  // @ts-ignore (ignore while @types/styled-components isn't up to date)
  useTheme as baseUseTheme
} from "styled-components";

import { Theme } from "ui/theme";

export type ThemeProps = BaseThemeProps<Theme>;

export type ThemedProps<P = {}> = ThemeProps & P;

export const useTheme = baseUseTheme as () => Theme;

export const getThemeProp = <P extends keyof Theme>(key: P) => <
  TProps extends ThemeProps = ThemeProps
>(
  lens: ((props: TProps) => keyof Theme[P]) | keyof Theme[P]
) => (props: TProps) => {
  const $value = typeof lens === "function" ? lens(props) : lens;

  return props.theme[key][$value];
};

export const getColor = getThemeProp("colors");
export const getRadius = getThemeProp("radii");
export const getFontSize = getThemeProp("fontSizes");
export const getShadow = getThemeProp("shadows");

export const css = baseCSS as ThemedCssFunction<Theme>;
export default styled as ThemedStyledInterface<Theme>;
