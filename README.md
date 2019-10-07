# skeleton-loader

>

[![NPM](https://img.shields.io/npm/v/skeleton-loader.svg)](https://www.npmjs.com/package/skeleton-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/zlatanpham/skeleton-loader.svg?branch=master)](https://travis-ci.org/zlatanpham/skeleton-loader)

## Install

```bash
yarn add @uxui/skeleton-loader
// or
npm install --save @uxui/skeleton-loader
```

## Usage

```tsx
import { Skeleton } from '@uxui/skeleton-loader';

class Example extends React.Component {
  render() {
    return <Skeleton />;
  }
}
```

By default, `styled-components` was used to do styling and responsiveness but if you wish to have a `emotion` version, then, you have it:

```tsx
import { Skeleton } from '@uxui/skeleton-loader/emotion';
```

Examples of usage can be found [here](https://codesandbox.io/s/7ojl18nlzx).

## Documentation

Document can be found [here](https://skeleton-loader.netlify.com).

## License

MIT © [zlatanpham](https://github.com/zlatanpham)
