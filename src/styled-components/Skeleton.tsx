import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import {
  getStyles,
  defaultBaseColor,
  defaultHighlightColor,
  CSSProperty,
  defaultDuration,
  bindProperty
} from './shared';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps
} from './SkeletonThemeProvider';

const Container = styled.div<
  DefaultSkeletonProps & {
    theme: SkeletonThemeProps;
    cssProps: DefaultSkeletonCSSProps;
  }
>`
  ${props => getStyles(props)}
  ${props => bindProperty('width', props.cssProps.width)};
  ${props => bindProperty('height', props.cssProps.height)};
  ${props => bindProperty('border-radius', props.cssProps.radius)};
  line-height: 1;
`;

export interface SkeletonCSSProps {
  width?: CSSProperty;
  height?: CSSProperty;
  radius?: CSSProperty;
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  customStyle?: CSSObject | TemplateStringsArray;
  baseColor?: string;
  highlightColor?: string;
  duration?: number;
}

export interface DefaultSkeletonCSSProps {
  width: CSSProperty;
  height: CSSProperty;
  radius: CSSProperty;
}

export interface DefaultSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  duration: number;
  customStyle?: CSSObject | TemplateStringsArray;
  baseColor: string;
  highlightColor: string;
}

export class Skeleton extends React.Component<
  SkeletonProps & SkeletonCSSProps
> {
  static defaultProps: DefaultSkeletonProps & DefaultSkeletonCSSProps = {
    width: '100%',
    radius: '0px',
    height: '20px',
    duration: defaultDuration,
    baseColor: defaultBaseColor,
    highlightColor: defaultHighlightColor
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { width, height, radius, ...rest } = this.props;
    const cssProps = {
      height,
      width,
      radius
    };
    return (
      <SkeletonThemeConsumer>
        {theme => (
          <Container
            cssProps={cssProps as DefaultSkeletonCSSProps}
            {...rest as DefaultSkeletonProps}
            theme={theme}
          />
        )}
      </SkeletonThemeConsumer>
    );
  }
}
