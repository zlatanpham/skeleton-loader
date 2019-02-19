import { bindProperty } from './shared';

describe('test bindProperty', () => {
  it('valid output', () => {
    expect(bindProperty('width', ['100%', '50%'])).toBe(
      'width: 100%;@media (min-width: 576px){width: 50%;}',
    );
  });
});
