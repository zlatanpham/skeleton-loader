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

interface SkeletonStringDefaultProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  duration: number;
  baseColor: string;
  highlightColor: string;
  customStyle?: CSSObject | SerializedStyles;
}
export interface SkeletonStringProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  duration?: number;
  baseColor?: string;
  highlightColor?: string;
  customStyle?: CSSObject | SerializedStyles;
}

export const SkeletonString: React.FC<SkeletonStringProps> = ({
  baseColor = defaultBaseColor,
  highlightColor = defaultHighlightColor,
  duration = defaultDuration,
  children,
  ...props
}) => {
  return (
    <SkeletonThemeConsumer>
      {theme => (
        <TextWrapper
          {...({
            ...props,
            baseColor,
            highlightColor,
            duration
          } as SkeletonStringDefaultProps)}
          theme={theme}
        >
          {children}
        </TextWrapper>
      )}
    </SkeletonThemeConsumer>
  );
};
