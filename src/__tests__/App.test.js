import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the custom text', () => {
  const { getByText } = render(<App />);

  const linkElement = getByText(/Hi my name is Brian!/i);
  expect(linkElement).toBeInTheDocument();
});
