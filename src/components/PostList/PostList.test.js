import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import PostList from './PostList';

afterEach(() => {
  cleanup();
});

test('render a PostList sidebar text and img', () => {
  render(<PostList />);
  const PostListSidebarElement = screen.getByText('coding');
  const logo = screen.getByRole('img');
  expect(PostListSidebarElement).toBeInTheDocument();
  expect(logo).toHaveAttribute('src', 'https://res.cloudinary.com/suaz/image/upload/v1621452710/11800flowers-logo_hscckj.jpg');
  expect(logo).toHaveAttribute('alt', 'logo');
});

test('search updates on change', () => {
  const setSearch = jest.fn((value) => { })

  const { getByPlaceholderText } = setSearch

  const searchInput = getByPlaceholderText('Search...')

  fireEvent.change(searchInput, { target: { value: 'test' } })

  expect(searchInput.value).toBe('test')
})
