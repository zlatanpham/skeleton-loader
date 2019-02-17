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

const Span = styled.span`
  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  animation: ${flash} 1.5s ease-in-out infinite;
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  margin: 6px 15px 6px 0px;
  color: transparent !important;
  padding: 0 15px;
  border-radius: 3px;
`;

const Container = styled('div')({
  lineHeight: '1em',
  fontSize: '9px',
});

interface LoaderPlaceholderProps {
  num: number;
}

export class SkeletonWords extends React.Component<LoaderPlaceholderProps> {
  data = Array.from({ length: this.props.num }, () =>
    'a'.repeat(Math.random() * 13 + 1),
  );

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container>
        {this.data.slice(0, this.props.num).map((text, index) => (
          <Span key={index}>{text}</Span>
        ))}
      </Container>
    );
  }
}
