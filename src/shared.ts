import { keyframes, CSSObject, css } from 'styled-components';
import { SkeletonThemeProps } from './SkeletonThemeProvider';
export const defaultBaseColor = '#eeeeee';
export const defaultHighlightColor = '#f5f5f5';

export const flash = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

interface DefaultProps {
  baseColor: string;
  highlightColor: string;
  customeStyle?: CSSObject | TemplateStringsArray;
}

export const getStyles = (
  props: DefaultProps & { theme: SkeletonThemeProps },
) => {
  return css`
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
    animation: ${flash} 1.5s ease-in-out infinite;
    color: transparent !important;
    > * {
      color: transparent !important;
    }
    ${props.customeStyle || ''}
  `;
};
