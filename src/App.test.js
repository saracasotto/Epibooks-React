import { render, screen } from '@testing-library/react';
import Welcome from './components/Welcome';
import CommentArea from './components/CommentArea';
import AllTheBooks from './components/AllTheBooks';
import Fantasy from './data/fantasy.json'

test('renders Welcome component', () => {
  render(<Welcome />);
  expect(screen.getByText(/Welcome to Epibooks!/i)).toBeInTheDocument();  //test with innerText
  expect(screen.getByTestId('welcome')).toBeInTheDocument(); //test with ID
});


test('renders CommentArea component', () => {
  render(<CommentArea />);
  expect(screen.getByTestId('comment-area')).toBeInTheDocument();
});

