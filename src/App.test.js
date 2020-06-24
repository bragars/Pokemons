import React from 'react';
import { render } from '@testing-library/react';
import { test } from './Pages/Favoritos';

test('test', () => {
  const value = test;
  expect(value).toBe(0);
});


// const { getByText } = render(<Favoritos />);
// const linkElement = getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();