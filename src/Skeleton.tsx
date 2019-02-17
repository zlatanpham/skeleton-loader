import * as React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Container = styled.div<SkeletonProps>`
  background-color: red;

  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  display: inline-block;
  line-height: 1;
  ${props => bindProperty('width', props.width)};
  ${props => bindProperty('height', props.height)};
  ${props => bindProperty('radius', props.radius)};
  animation: ${flash} 1.5s ease-in-out infinite;
`;

type CSSProperty = string | [string, string, string, string];

export interface SkeletonProps {
  width: CSSProperty;
  height: CSSProperty;
  radius: CSSProperty;
}

const screens = {
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
};

const bindProperty = (name: string, value: CSSProperty): string => {
  if (Array.isArray(value)) {
    let response: string[] = [];
    let count = 0;
    Object.keys(screens).forEach((key, index) => {
      response[count++] = `${screen[key]}{${name}:${value[index]};}`;
    });
    return response.join('');
  } else {
    return `${name}: ${value};`;
  }
};

export class Skeleton extends React.Component<SkeletonProps> {
  static defaultProps: SkeletonProps = {
    width: '100%',
    radius: '8px',
    height: '20px',
  };
  render() {
    return <Container {...this.props}>Hello</Container>;
  }
}
