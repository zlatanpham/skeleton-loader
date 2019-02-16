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

const Container = styled.div`
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
  width: 100%;
  animation: ${flash} 1.5s ease-in-out infinite;
`;

export interface SkeletonProps {}

export class Skeleton extends React.Component<SkeletonProps> {
  render() {
    return <Container>Hello</Container>;
  }
}
