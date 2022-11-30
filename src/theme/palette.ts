import { PaletteMode } from '@mui/material';
import '@mui/material/styles';

export const palette = {
  mode: 'light' as PaletteMode | undefined,
  primary: {
    main: '#FFCB46',
  },
  secondary: {
    main: '#BEBEBE',
  },
  case: {
    contrast: {
      black: '#000000',
      gray1: '#BEBEBE',
      gray2: '#373737',
    },
    main: {
      yellow: {
        high: '#FFCB46',
      },
    },
  },
};

declare module '@mui/material/styles' {
  interface Palette {
    case: {
      main: {
        yellow: {
          high: string;
        };
      };
      contrast: {
        black: string;
        gray1: string;
        gray2: string;
      };
    };
  }
  interface PaletteOptions {
    case?: {
      main: {
        yellow: {
          high: string;
        };
      };
      contrast: {
        black: string;
        gray1: string;
        gray2: string;
      };
    };
  }
}
