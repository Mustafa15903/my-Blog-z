import { render, screen } from '@testing-library/react';
import App from './App';

// Mock لـ react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
}));

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/home/i)).toBeInTheDocument(); // تغيير هذا حسب محتواك الفعلي
});