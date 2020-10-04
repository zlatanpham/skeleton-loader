import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';
import serializer from 'jest-emotion';

expect.addSnapshotSerializer(serializer);

describe('<Skeleton />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Skeleton width="200px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
