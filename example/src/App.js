import React, { Component } from 'react';

import {
  Skeleton,
  SkeletonString,
  // SkeletonWords,
  SkeletonThemeProvider
} from 'skeleton-loader';

import { SkeletonWords } from 'skeleton-loader/emotion';

export default class App extends Component {
  render() {
    return (
      <div>
        <SkeletonWords
          pattern={[22, 12, 12, 2, 22, 3, 23]}
          height="16px"
          radius="3px"
          highlightColor="red"
          duration={2}
        />
      </div>
    );
  }
}
