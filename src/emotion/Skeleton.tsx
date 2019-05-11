import * as React from 'react';
import { CSSObject, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import {
  getStyles,
  defaultBaseColor,
  defaultHighlightColor,
  CSSProperty,
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

export interface SkeletonProps {
  customStyle?: CSSObject | SerializedStyles;
  baseColor?: string;
  highlightColor?: string;
  duration?: number;
}

export interface DefaultSkeletonCSSProps {
  width: CSSProperty;
  height: CSSProperty;
  radius: CSSProperty;
  duration: number;
}

export interface DefaultSkeletonProps {
  duration: number;
  customStyle?: CSSObject | SerializedStyles;
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
    duration: 1.5,
    baseColor: defaultBaseColor,
    highlightColor: defaultHighlightColor
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      baseColor,
      highlightColor,
      duration,
      customStyle,
      ...rest
    } = this.props;
    const splitProps = { baseColor, highlightColor, duration, customStyle };
    return (
      <SkeletonThemeConsumer>
        {theme => (
          <Container
            cssProps={rest as DefaultSkeletonCSSProps}
            {...splitProps as DefaultSkeletonProps}
            theme={theme}
          />
        )}
      </SkeletonThemeConsumer>
    );
  }
}
