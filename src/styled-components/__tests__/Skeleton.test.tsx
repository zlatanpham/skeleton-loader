import 'jest-styled-components';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../Skeleton';

describe('<Skeleton />', () => {
  it('Should match snapshot', () => {
    const { container } = render(<Skeleton width="200px" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
