import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import {
  getStyles,
  defaultBaseColor,
  defaultHighlightColor,
  flash,
} from './shared';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps,
} from './SkeletonThemeProvider';

const Container = styled.div<
  DefaultSkeletonProps & {
    theme: SkeletonThemeProps;
    css: DefaultSkeletonCSSProps;
  }
>`
  ${props => getStyles(props)}
  ${props => bindProperty('width', props.css.width)};
  ${props => bindProperty('height', props.css.height)};
  ${props => bindProperty('border-radius', props.css.radius)};
  animation: ${flash} 1.5s ease-in-out infinite;
  ${props => props.customStyles || ''}
  line-height: 1;
`;

type CSSProperty = string | string[];

export interface SkeletonCSSProps {
  width?: CSSProperty;
  height?: CSSProperty;
  radius?: CSSProperty;
}

export interface SkeletonProps {
  customStyles?: CSSObject | TemplateStringsArray;
  baseColor?: string;
  highlightColor?: string;
}

export interface DefaultSkeletonCSSProps {
  width: CSSProperty;
  height: CSSProperty;
  radius: CSSProperty;
}

export interface DefaultSkeletonProps {
  customStyles?: CSSObject | TemplateStringsArray;
  baseColor: string;
  highlightColor: string;
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

export class Skeleton extends React.Component<
  SkeletonProps & SkeletonCSSProps
> {
  static defaultProps: DefaultSkeletonProps & DefaultSkeletonCSSProps = {
    width: '100%',
    radius: '0px',
    height: '20px',
    baseColor: defaultBaseColor,
    highlightColor: defaultHighlightColor,
  };

  render() {
    const { baseColor, highlightColor, ...rest } = this.props;
    const splitProps = { baseColor, highlightColor };
    return (
      <SkeletonThemeConsumer>
        {theme => (
          <Container
            css={rest as DefaultSkeletonCSSProps}
            {...splitProps as DefaultSkeletonProps}
            theme={theme}
          />
        )}
      </SkeletonThemeConsumer>
    );
  }
}
