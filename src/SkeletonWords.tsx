import * as React from 'react';
import styled from 'styled-components';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps,
} from './SkeletonThemeProvider';
import {
  defaultBaseColor,
  defaultHighlightColor,
  getStyles,
  CSSProperty,
  bindProperty,
} from './shared';

const Span = styled.span<
  SkeletonWordsDefaultProps & {
    theme: SkeletonThemeProps;
    css: SkeletonWordsCSSDefaultProps;
  }
>`
  ${props => getStyles(props)}
  ${props => bindProperty('padding', props.css.padding)};
  ${props => bindProperty('height', props.css.height)};
  ${props => bindProperty('margin', props.css.margin)};
  ${props => bindProperty('border-radius', props.css.radius)};
  color: transparent !important;
`;

const Container = styled('div')({});

interface SkeletonWordsProps {
  num: number;
  baseColor?: string;
  highlightColor?: string;
  pattern?: number[];
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
}

interface SkeletonWordsCSSDefaultProps {
  padding: CSSProperty;
  margin: CSSProperty;
  height: CSSProperty;
  radius: CSSProperty;
}

export class SkeletonWords extends React.Component<
  SkeletonWordsProps & SkeletonWordsCSSProps
> {
  static defaultProps: SkeletonWordsDefaultProps &
    SkeletonWordsCSSDefaultProps = {
    num: 3,
    baseColor: defaultBaseColor,
    highlightColor: defaultHighlightColor,
    height: '15px',
    padding: '0 20px',
    margin: '0 15px 12px 0',
    radius: '0',
  };

  data = Array.isArray(this.props.pattern)
    ? this.props.pattern.map(num => 'a'.repeat(num))
    : Array.from({ length: this.props.num }, () =>
        'a'.repeat(Math.random() * 13 + 1),
      );

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      baseColor,
      highlightColor,
      height,
      padding,
      margin,
      radius,
    } = this.props;
    const injectedProps = { baseColor, highlightColor };
    const cssProps = { height, padding, margin, radius };

    return (
      <SkeletonThemeConsumer>
        {theme => (
          <Container>
            {this.data.map((text, index) => (
              <Span
                key={index}
                theme={theme}
                css={cssProps as SkeletonWordsCSSDefaultProps}
                {...injectedProps as SkeletonWordsDefaultProps}
              >
                {text}
              </Span>
            ))}
          </Container>
        )}
      </SkeletonThemeConsumer>
    );
  }
}
