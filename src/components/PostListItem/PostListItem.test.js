import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { render, screen, fireEvent, createEvent, cleanup } from '@testing-library/react';
import PostListItem from './PostListItem';

afterEach(() => {
  cleanup();
});

test('render a PostListItem', () => {
  render(<PostListItem title={'test-title'} body={'test-body'}/>);
  const PostListItemTitle = screen.getByText('test-title');
  const PostListItemBody = screen.getByText('test-body');
  expect(PostListItemTitle).toBeInTheDocument();
  expect(PostListItemBody).toBeInTheDocument();
});

test('PostListItem onClick for Modal', () => {
  render(<PostListItem title={'test-title'} body={'test-body'}/>);
  const PostListItemButton = screen.getByText('test-title');
  expect(PostListItemButton).toBeInTheDocument();

  const myEvent = createEvent.click(PostListItemButton, { button: 1 })
  fireEvent(PostListItemButton, myEvent)

  const modalTextElement = screen.getByText('Edit Form')
  expect(modalTextElement).toBeInTheDocument()
});

test('shows Modal', () => {
  render(
    <Modal show={true}>
      <div>test</div>
    </Modal>,
  )
  const modalElement = screen.getByText('test')
  expect(modalElement).toBeInTheDocument()
});

test('hides Modal', () => {
  const spy = jest.fn()
  render(
    <Button onClick={spy}>
      <div>close</div>
    </Button>,
  )
  const closeBtnElement = screen.getByText('close')
  expect(closeBtnElement).toBeInTheDocument()

  const closeModalEvent = createEvent.click(closeBtnElement, { button:1 })
  fireEvent(closeBtnElement, closeModalEvent)
  expect(spy).toHaveBeenCalledTimes(1)
});