import 'jest-styled-components';
import * as React from 'react';
import { render } from '@testing-library/react';
import { SkeletonString } from '../SkeletonString';

describe('<SkeletonString />', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <SkeletonString>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        eget ipsum sodales, tincidunt tortor at, feugiat quam. Morbi dignissim
        ligula nisi, sit amet tempus eros porta at.
      </SkeletonString>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
