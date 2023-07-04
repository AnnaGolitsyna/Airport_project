import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchTextBox from './SearchTextBox';
import SearchInput from './SearchInput';

describe('SearchTextBox component', () => {

  test('SearchTextBox renders', () => {
    render(
      <Router>
        <SearchTextBox />
      </Router>
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(
      screen.getByText('Enter a flight number or city')
    ).toBeInTheDocument();
  });


  describe('SearchInput component', () => {

    const onChange = jest.fn();
    
    test('onChange works correctly', () => {
      render(
        <Router>
          <SearchInput value='' onChange={onChange} />
        </Router>
      );
       const searchInput = screen.getByLabelText(
        'Enter a flight number or city'
      );
      userEvent.type(searchInput, 'react');
      expect(onChange).toHaveBeenCalledTimes(5)
    });
  });

});

