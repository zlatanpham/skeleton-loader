import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps
} from './SkeletonThemeProvider';
import {
  defaultBaseColor,
  defaultHighlightColor,
  getStyles,
  CSSProperty,
  bindProperty,
  defaultDuration
} from './shared';

const Span = styled.span<
  SkeletonWordsDefaultProps & {
    theme: SkeletonThemeProps;
    cssProps: SkeletonWordsCSSDefaultProps;
  }
>`
  ${props => getStyles(props)}
  ${props => bindProperty('padding', props.cssProps.padding)};
  ${props => bindProperty('height', props.cssProps.height)};
  ${props => bindProperty('margin', props.cssProps.margin)};
  ${props => bindProperty('border-radius', props.cssProps.radius)};
  color: transparent !important;
`;

const Container = styled('div')({});

interface SkeletonWordsProps {
  num: number;
  baseColor?: string;
  highlightColor?: string;
  pattern?: number[];
  duration?: number;
  customStyle?: CSSObject | TemplateStringsArray;
}

interface SkeletonWordsCSSProps {
  padding?: CSSProperty;
  margin?: CSSProperty;
  height?: CSSProperty;
  radius?: CSSProperty;
}

interface SkeletonWordsDefaultProps {
  num: number;
  baseColor: string;
  highlightColor: string;
  pattern?: number[];
  duration: number;
  customStyle?: CSSObject | TemplateStringsArray;
}

interface SkeletonWordsCSSDefaultProps {
  padding: CSSProperty;
  margin: CSSProperty;
  height: CSSProperty;
  radius: CSSProperty;
}

export const SkeletonWords = React.memo(
  ({
    num = 3,
    baseColor = defaultBaseColor,
    highlightColor = defaultHighlightColor,
    height = '15px',
    padding = '0 20px',
    margin = '0 15px 12px 0',
    radius = '0',
    duration = defaultDuration,
    ...props
  }: SkeletonWordsProps &
    SkeletonWordsCSSProps &
    React.HTMLAttributes<HTMLDivElement>) => {
    const data = Array.isArray(props.pattern)
      ? props.pattern.map(num => 'a'.repeat(num))
      : Array.from({ length: num }, () => 'a'.repeat(Math.random() * 13 + 1));

    const { customStyle, ...rest } = props;

    const injectedProps = {
      baseColor,
      highlightColor,
      duration,
      customStyle
    };

    const cssProps = {
      height,
      padding,
      margin,
      radius
    };

    return (
      <SkeletonThemeConsumer>
        {theme => (
          <Container {...rest}>
            {data.map((text, index) => (
              <Span
                key={index}
                theme={theme}
                cssProps={cssProps as SkeletonWordsCSSDefaultProps}
                {...(injectedProps as SkeletonWordsDefaultProps)}
              >
                {text}
              </Span>
            ))}
          </Container>
        )}
      </SkeletonThemeConsumer>
    );
  },
  () => true
);
