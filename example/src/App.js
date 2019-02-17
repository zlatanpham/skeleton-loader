import React, { Component } from 'react';

import {
  Skeleton,
  SkeletonString,
  SkeletonWords,
  SkeletonThemeProvider,
} from 'skeleton-loader';

export default class App extends Component {
  render() {
    return (
      <SkeletonThemeProvider
        value={{ baseColor: 'red', hightlightColor: 'green' }}
      >
        <div>
          <Skeleton />
          <Skeleton width={'60px'} height={'60px'} radius={'60px'} />

          <h1>
            <SkeletonString>Hello world</SkeletonString>
          </h1>
          <p>
            <SkeletonString>
              Proident nostrud ut id id reprehenderit. Proident nostrud ut id id
              reprehenderit.
            </SkeletonString>
          </p>
          <div>
            <SkeletonWords num={20} />
          </div>
        </div>
      </SkeletonThemeProvider>
    );
  }
}
