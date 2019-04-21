import { keyframes, CSSObject, css } from 'styled-components';
import { SkeletonThemeProps } from './SkeletonThemeProvider';
export const defaultBaseColor = '#eeeeee';
export const defaultHighlightColor = '#f5f5f5';
export const defaultDuration = 1.5;

export const flash = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

interface DefaultProps {
  duration: number;
  baseColor: string;
  highlightColor: string;
  customStyle?: CSSObject | TemplateStringsArray;
}

export const getStyles = (
  props: DefaultProps & { theme: SkeletonThemeProps }
) => css`
  background-color: ${props.theme.baseColor || props.baseColor};
  background-image: linear-gradient(
    90deg,
    ${props.theme.baseColor || props.baseColor},
    ${props.theme.hightlightColor || props.highlightColor},
    ${props.theme.baseColor || props.baseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  animation: ${flash} ${props.duration}s ease-in-out infinite;
  color: transparent !important;
  > * {
    color: transparent !important;
  }
  ${props.customStyle || ''}
`;

export type CSSProperty = string | string[];

const screens = {
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)'
};

export const bindProperty = (name: string, value: CSSProperty): string => {
  if (Array.isArray(value)) {
    let response: string[] = [];
    let count = 0;
    response[count++] = `${name}: ${value[0]};`;
    Object.keys(screens).forEach((key, index) => {
      if (typeof value[index + 1] === 'string') {
        response[count++] = `${screens[key]}{${name}: ${value[index + 1]};}`;
      }
    });
    return response.join('');
  }

  return `${name}: ${value};`;
};
