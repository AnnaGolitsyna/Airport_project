import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextAfterWar from './TextAfterWar';
import TextBeforeWar from './TextBeforeWar';

const theme = createTheme();

describe('NotFlights componnent', () => {
    
   test('renders "No flights" text', () => {
     render(
       <Router>
         <ThemeProvider theme={theme}>
           <TextAfterWar />
         </ThemeProvider>
       </Router>
     );
     const linkElement = screen.getByText(
       /Please note that air traffic has been suspended since 24.02.22 due to the war/i
     );
     expect(linkElement).toBeInTheDocument();
   });

   test('renders "There is no such flight" text', () => {
     const testDate = '22.01.22';
     render(
       <Router>
         <ThemeProvider theme={theme}>
           <TextBeforeWar date={testDate} />
         </ThemeProvider>
       </Router>
     );
     const linkElement = screen.getByText(
       `There is no such flight on ${testDate}`
     );
     expect(linkElement).toBeInTheDocument();
   });

})
