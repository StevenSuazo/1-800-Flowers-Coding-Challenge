import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
});

test('render App', () => {
  render(
    <App>
      <div>test</div>
    </App>,
  )
  const appElement = screen.getByText('test')
  expect(appElement).toBeInTheDocument()
});