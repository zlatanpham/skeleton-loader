import * as React from 'react';
import { CSSObject, SerializedStyles } from '@emotion/core';
import styled from '@emotion/styled';
import {
  SkeletonThemeConsumer,
  SkeletonThemeProps
} from './SkeletonThemeProvider';
import {
  defaultBaseColor,
  defaultHighlightColor,
  defaultDuration,
  getStyles
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
  customStyle?: CSSObject | SerializedStyles;
}
export interface SkeletonStringProps {
  duration?: number;
  baseColor?: string;
  highlightColor?: string;
  customStyle?: CSSObject | SerializedStyles;
}

export class SkeletonString extends React.Component<SkeletonStringProps> {
  static defaultProps: SkeletonStringDefaultProps = {
    baseColor: defaultBaseColor,
    highlightColor: defaultHighlightColor,
    duration: defaultDuration
  };

  shouldComponentUpdate() {
    return false;
  }

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
