import * as React from 'react';
import { render } from '@testing-library/react';
import { SkeletonString } from '../SkeletonString';
import serializer from 'jest-emotion';

expect.addSnapshotSerializer(serializer);

describe('<SkeletonString />', () => {
  const { container } = render(
    <SkeletonString>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget
      ipsum sodales, tincidunt tortor at, feugiat quam. Morbi dignissim ligula
      nisi, sit amet tempus eros porta at.
    </SkeletonString>
  );

  it('Should match snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
