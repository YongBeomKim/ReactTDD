import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import Content from '../Content'
import '@testing-library/jest-dom'


test('shoud render todo component', () => {
  render(<Content />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
})