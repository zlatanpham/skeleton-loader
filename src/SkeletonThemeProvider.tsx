import * as React from 'react';
import { defaultBaseColor, defaultHighlightColor } from './shared';

export interface SkeletonThemeProps {
  baseColor: string;
  hightlightColor: string;
}

export const {
  Consumer: SkeletonThemeConsumer,
  Provider: SkeletonThemeProvider,
} = React.createContext<SkeletonThemeProps>({
  baseColor: defaultBaseColor,
  hightlightColor: defaultHighlightColor,
});

// /**
//  * Provide a theme to an entire react component tree via context
//  */
// export class SkeletonThemeConsumer extends React.Component<
//   Props & { children: (props: Props) => JSX.Element }
// > {
//   render() {
//     if (!this.props.children) return null;

//     return <Consumer>{props => this.props.children(props)}</Consumer>;
//   }
// }
