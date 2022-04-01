// import { render, screen } from '@testing-library/react';
// import App from './App';
// import '@testing-library/jest-dom'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders content', () => {
    const app = {
      content: 'This is a test',
      important: true
    }
  }
  )
