import * as React from 'react';
import { render } from '@testing-library/react';
import { SkeletonWords } from '../SkeletonWords';
import serializer from 'jest-emotion';

expect.addSnapshotSerializer(serializer);

describe('<SkeletonWords />', () => {
  it('Should render 10 span tag', () => {
    const { container } = render(<SkeletonWords num={10} />);
    expect(container.querySelectorAll('span')).toHaveLength(10);
  });
});
