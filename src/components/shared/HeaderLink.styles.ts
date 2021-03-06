import { IStyle } from 'fela';

import { IStyles } from './HeaderLink.types';

export const sharedStyle: IStyle = {
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 600,
  marginBottom: 0,
  marginTop: 0,
  position: 'relative',
  textTransform: 'uppercase',
};

const styles: IStyles = {
  primary: {
    ...sharedStyle,

    fontSize: '17px',
    top: '24px',

    atDesktop: {
      left: 0,
      position: 'absolute',
      textAlign: 'left',
      top: '24px',
    },
  },

  secondary: {
    ...sharedStyle,

    fontSize: '11px',
    letterSpacing: '0.1em',
    marginBottom: '44px',
    top: '28px',

    atDesktop: {
      left: 0,
      position: 'absolute',
      textAlign: 'left',
      top: '46px',
    },
  },

  link: {
    border: 0,
    color: 'inherit',
    textDecoration: 'none',
  },
};

export default styles;
