import * as React from 'react';
import styled from 'styled-components';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps,
} from './SkeletonThemeProvider';
import { defaultBaseColor, defaultHighlightColor, getStyles } from './shared';

const Span = styled.span<
  SkeletonWordsDefaultProps & { theme: SkeletonThemeProps }
>`
  ${props => getStyles(props)}
  margin: 6px 15px 6px 0px;
  color: transparent !important;
  padding: 0 15px;
  border-radius: 3px;
`;

const Container = styled('div')({
  lineHeight: '1em',
  fontSize: '9px',
});

interface SkeletonWordsProps {
  num: number;
  baseColor?: string;
  highlightColor?: string;
}

interface SkeletonWordsDefaultProps {
  num: number;
  baseColor: string;
  highlightColor: string;
}

export class SkeletonWords extends React.Component<SkeletonWordsProps> {
  static defaultProps: SkeletonWordsDefaultProps = {
    num: 3,
    baseColor: defaultBaseColor,
    highlightColor: defaultHighlightColor,
  };

  data = Array.from({ length: this.props.num }, () =>
    'a'.repeat(Math.random() * 13 + 1),
  );

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <SkeletonThemeConsumer>
        {theme => (
          <Container>
            {this.data.slice(0, this.props.num).map((text, index) => (
              <Span
                key={index}
                theme={theme}
                {...this.props as SkeletonWordsDefaultProps}
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
