import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
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

//   test('onSubmit works correctly', async () => {

//     render(
//       <Router>
//         <SearchInput />
//       </Router>
//     );


//   });
});
