import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
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
  customStyle?: CSSObject | TemplateStringsArray;
}
export interface SkeletonStringProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  duration?: number;
  baseColor?: string;
  highlightColor?: string;
  customStyle?: CSSObject | TemplateStringsArray;
}

export const SkeletonString: React.FC<SkeletonStringProps> = React.memo(
  ({
    baseColor = defaultBaseColor,
    highlightColor = defaultHighlightColor,
    duration = defaultDuration,
    children,
    ...rest
  }) => (
    <SkeletonThemeConsumer>
      {theme => (
        <TextWrapper
          {...({
            ...rest,
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
  ),
  () => true
);
