import React, { Component } from 'react';

import { Skeleton } from 'skeleton-loader';

export default class App extends Component {
  render() {
    return (
      <div>
        <Skeleton />
        <Skeleton width={'60px'} height={'60px'} radius={'60px'} />
      </div>
    );
  }
}
