import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js'
import Fantasy from './data/fantasy.json'

test('renders Welcome component', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to Epibooks!/i)).toBeInTheDocument();  //test with innerText
  expect(screen.getByTestId('welcome')).toBeInTheDocument(); //test with ID
});

test('renders all the books in cards', () => {
  render(<App />)
  expect(screen.getAllByTestId('book-card')).toHaveLength(Fantasy.length)  //json length
})

test('renders CommentArea component', () => {
  render(<App />);
  expect(screen.getByTestId('comment-area')).toBeInTheDocument();
});

test('changes border color on click', () => {
  render(<App />);
  expect(screen.getAllByTestId('book-card')[0]).toHaveStyle('border: 1px solid #22908c');
  fireEvent.click(screen.getAllByTestId('book-card')[0]);
  expect(screen.getAllByTestId('book-card')[0]).toHaveStyle('border: 2px solid #d22e68');
});


test('renders no comments', () => {
  render(<App />)
  expect(screen.queryAllByTestId('comment-section')).toHaveLength(0)
})

test('renders comments', async () => {
  render(<App />)
  fireEvent.click(screen.getAllByTestId('book-card')[0])
  expect(await screen.findAllByTestId('comment-section')).not.toHaveLength(0)
})

