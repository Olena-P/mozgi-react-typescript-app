import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import React from 'react';

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontSize: 12,

  h1: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '58px',
    lineHeight: '64px',
  },
  h2: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '45px',
    textTransform: 'uppercase',
  },
  h3: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '30px',
  },
  extra_large_bolt: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'uppercase',
  },
  extra_large: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'uppercase',
  },
  large_bolt: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
  },
  large: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
  },
  default_bolt: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '20px',
  },
  default: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
  },
  small_bolt: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '13px',
    lineHeight: '19px',
  },
  small_large: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '19px',
    textTransform: 'uppercase',
  },
  small: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '19px',
  },

  extra_small_bolt: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '11px',
    lineHeight: '16px',
  },
  extra_small: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '11px',
    lineHeight: '16px',
  },
  label: {
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '10px',
  },
  label_bolt: {
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: '10px',
  },
  label_middle: {
    fontStyle: 'normal',
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '12px',
  },
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
    extra_large: React.CSSProperties;
    extra_large_bolt: React.CSSProperties;
    large_bolt: React.CSSProperties;
    large: React.CSSProperties;
    default_bolt: React.CSSProperties;
    default: React.CSSProperties;
    small_bolt: React.CSSProperties;
    small: React.CSSProperties;
    extra_small_bolt: React.CSSProperties;
    extra_small: React.CSSProperties;
    label: React.CSSProperties;
    label_middle: React.CSSProperties;
    small_large: React.CSSProperties;
    label_bolt: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    extra_large: React.CSSProperties;
    extra_large_bolt: React.CSSProperties;
    large_bolt: React.CSSProperties;
    large: React.CSSProperties;
    default_bolt: React.CSSProperties;
    default: React.CSSProperties;
    small_bolt: React.CSSProperties;
    small: React.CSSProperties;
    extra_small_bolt: React.CSSProperties;
    extra_small: React.CSSProperties;
    label: React.CSSProperties;
    label_middle: React.CSSProperties;
    small_large: React.CSSProperties;
    label_bolt: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    small1: true;
    extra_large: true;
    extra_large_bolt: true;
    large_bolt: true;
    large: true;
    default_bolt: true;
    default: true;
    small_bolt: true;
    small: true;
    extra_small_bolt: true;
    extra_small: true;
    label: true;
    label_middle: true;
    small_large: true;
    label_bolt: true;
  }
}

export default typography;
