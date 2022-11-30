import { createTheme } from '@mui/material/styles';
import breakpoints from './breakpoints';
import { palette } from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  breakpoints,
  typography,
});

export default theme;
