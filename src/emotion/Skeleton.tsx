import * as React from 'react';
import { CSSObject, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
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

export interface DefaultSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  duration: number;
  customStyle?: CSSObject | SerializedStyles;
  baseColor: string;
  highlightColor: string;
}

export const Skeleton = React.memo(
  ({
    width = '100%',
    radius = '0px',
    height = '20px',
    duration = defaultDuration,
    baseColor = defaultBaseColor,
    highlightColor = defaultHighlightColor,
    ...props
  }: SkeletonProps & SkeletonCSSProps) => {
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
            theme={theme}
            {...({
              ...props,
              duration,
              baseColor,
              highlightColor
            } as DefaultSkeletonProps)}
          />
        )}
      </SkeletonThemeConsumer>
    );
  },
  () => true
);
