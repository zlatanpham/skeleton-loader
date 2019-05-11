import * as React from 'react';

export interface SkeletonThemeProps {
  baseColor: string;
  hightlightColor: string;
}

export const {
  Consumer: SkeletonThemeConsumer,
  Provider: SkeletonThemeProvider
} = React.createContext<SkeletonThemeProps>({
  baseColor: '',
  hightlightColor: ''
});
