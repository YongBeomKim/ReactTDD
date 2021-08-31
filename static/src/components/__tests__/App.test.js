import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from '../../App'
// import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom'


test('renders component correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})