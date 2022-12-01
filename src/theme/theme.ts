import { createTheme } from '@mui/material/styles';
import breakpoints from './breakpoints';
import { palette } from './palette';

const theme = createTheme({
  palette,
  breakpoints,
});

export default theme;
