import * as React from 'react';
import styled, { keyframes, CSSObject } from 'styled-components';

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

const Container = styled.div<{ css: DefaultSkeletonProps }>`
  background-color: ${defaultBaseColor};
  background-image: linear-gradient(
    90deg,
    ${defaultBaseColor},
    ${defaultHighlightColor},
    ${defaultBaseColor}
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  display: inline-block;
  line-height: 1;
  ${props => bindProperty('width', props.css.width)};
  ${props => bindProperty('height', props.css.height)};
  ${props => bindProperty('border-radius', props.css.radius)};
  animation: ${flash} 1.5s ease-in-out infinite;
  ${props => props.css.customStyles || ''}
`;

type CSSProperty = string | string[];

export interface SkeletonProps {
  width?: CSSProperty;
  height?: CSSProperty;
  radius?: CSSProperty;
  customStyles?: CSSObject | TemplateStringsArray;
}

export interface DefaultSkeletonProps {
  width: CSSProperty;
  height: CSSProperty;
  radius: CSSProperty;
  customStyles?: CSSObject | TemplateStringsArray;
}

const screens = {
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
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
  } else {
    return `${name}: ${value};`;
  }
};

export class Skeleton extends React.Component<SkeletonProps> {
  static defaultProps: DefaultSkeletonProps = {
    width: '100%',
    radius: '0px',
    height: '20px',
  };

  render() {
    return <Container css={this.props as DefaultSkeletonProps} />;
  }
}
