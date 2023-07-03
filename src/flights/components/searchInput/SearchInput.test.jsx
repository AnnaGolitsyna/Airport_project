import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
  test('SearchInput renders', () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(
      screen.getByText('Enter a flight number or city')
    ).toBeInTheDocument();
  });

  test('onSubmit works correctly', () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );

    const searchInput = screen.getByLabelText('Enter a flight number or city');
    userEvent.type(searchInput, 'react');

    expect(screen.getByRole('button')).toBeInTheDocument();

  
  });
});
