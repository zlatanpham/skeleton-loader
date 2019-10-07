import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';
import serializer from 'jest-emotion';

expect.addSnapshotSerializer(serializer);

describe('<Skeleton />', () => {
  const { container } = render(<Skeleton width="200px" />);

  it('Should match snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
