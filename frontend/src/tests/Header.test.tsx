import { render, screen } from '@testing-library/react';
import { Header } from "../components/Header";

test('validate header interface element has logo', () => {
  render(<Header />);
  const linkElement = screen.getByAltText('Birdie Logo')
  expect(linkElement).toBeInTheDocument();
});
