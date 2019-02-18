import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import {
  getStyles,
  defaultBaseColor,
  defaultHighlightColor,
  CSSProperty,
  bindProperty,
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
  line-height: 1;
`;

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
