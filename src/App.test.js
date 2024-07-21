import { render, screen, fireEvent } from '@testing-library/react';
import App from './App.js'
import Fantasy from './data/fantasy.json'

it('renders Welcome component', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to Epibooks!/i)).toBeInTheDocument();  //test with innerText
  expect(screen.getByTestId('welcome')).toBeInTheDocument(); //test with ID
});

it('renders all the books in cards', () => {
  render(<App />)
  expect(screen.getAllByTestId('book-card')).toHaveLength(Fantasy.length)  //json length
})

it('renders CommentArea component', () => {
  render(<App />);
  expect(screen.getByTestId('comment-area')).toBeInTheDocument();
});

it('changes border color on click', () => {
  render(<App />);
  const cardElements = screen.getAllByTestId('book-card');
  expect(cardElements[0]).toHaveStyle('border: 1px solid #22908c');
  fireEvent.click(cardElements[0]);
  expect(cardElements[0]).toHaveStyle('border: 2px solid #d22e68');
});
