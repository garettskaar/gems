import React from 'react';
import { render } from '@testing-library/react';
import GEMS from './GEMS';

test('renders learn react link', () => {
  const { getByText } = render(<GEMS />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
