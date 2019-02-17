import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps,
} from './SkeletonThemeProvider';

export const defaultBaseColor = '#eee';
export const defaultHighlightColor = '#f5f5f5';

export const flash = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const TextWrapper = styled.span<SkeletonThemeProps>`
  background-color: ${props => props.baseColor || defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${props => props.baseColor || defaultBaseColor},
    ${props => props.hightlightColor || defaultHighlightColor},
    ${props => props.baseColor || defaultBaseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  animation: ${flash} 1.5s ease-in-out infinite;
  color: transparent !important;
  > * {
    color: transparent !important;
  }
`;

export class SkeletonString extends React.Component {
  render() {
    return (
      <SkeletonThemeConsumer>
        {props => <TextWrapper {...props}>{this.props.children}</TextWrapper>}
      </SkeletonThemeConsumer>
    );
  }
}
