import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the dashboard loading state', () => {
  render(<App />);
  const loadingText = screen.getByText(/Loading pipeline data/i);
  expect(loadingText).toBeInTheDocument();
});