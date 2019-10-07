import 'jest-styled-components';
import * as React from 'react';
import { render } from '@testing-library/react';
import { SkeletonWords } from '../SkeletonWords';

describe('<SkeletonWords />', () => {
  it('Should render 10 span tag', () => {
    const { container } = render(<SkeletonWords num={10} />);
    expect(container.querySelectorAll('span')).toHaveLength(10);
  });
});
