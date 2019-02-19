import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps,
} from './SkeletonThemeProvider';
import {
  defaultBaseColor,
  defaultHighlightColor,
  defaultDuration,
  getStyles,
} from './shared';

const TextWrapper = styled.span<
  SkeletonStringDefaultProps & { theme: SkeletonThemeProps }
>`
  ${props => getStyles(props)}
`;

interface SkeletonStringDefaultProps {
  duration: number;
  baseColor: string;
  highlightColor: string;
  customStyle?: CSSObject | TemplateStringsArray;
}
export interface SkeletonStringProps {
  duration?: number;
  baseColor?: string;
  highlightColor?: string;
  customStyle?: CSSObject | TemplateStringsArray;
}

export class SkeletonString extends React.Component<SkeletonStringProps> {
  static defaultProps: SkeletonStringDefaultProps = {
    baseColor: defaultBaseColor,
    highlightColor: defaultHighlightColor,
    duration: defaultDuration,
  };

  render() {
    return (
      <SkeletonThemeConsumer>
        {theme => (
          <TextWrapper
            {...this.props as SkeletonStringDefaultProps}
            theme={theme}
          >
            {this.props.children}
          </TextWrapper>
        )}
      </SkeletonThemeConsumer>
    );
  }
}
