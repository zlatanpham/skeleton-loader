import 'jest-styled-components';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';

describe('<Skeleton />', () => {
  const { container } = render(<Skeleton width="200px" />);

  it('Should match snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
