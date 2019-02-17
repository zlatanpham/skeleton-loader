import React, { Component } from 'react';

import { Skeleton } from 'skeleton-loader';

export default class App extends Component {
  render() {
    return (
      <div>
        <Skeleton />
        <Skeleton width={['100%', '50%']} height={'30px'} />
      </div>
    );
  }
}
