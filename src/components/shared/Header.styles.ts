import { border, margin } from 'polished';

import { IStyles } from './Header.types';

const style: IStyles = {
  container: ({ theme }) => ({
    backgroundColor: theme.color.background,
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 20,

    ...border('1px', 'solid', theme.color.border),

    ':active': {
      ...border('1px', 'solid', theme.color.border),
    },

    atDesktop: {
      height: theme.spacing.heading,
      position: 'fixed',
    },

    atPrint: {
      display: 'none',
    },
  }),

  inner: {
    maxWidth: '960px',
    padding: '0 36px',

    ...margin(0, 'auto'),
  },

  headings: {
    display: 'block',
    margin: 0,
    padding: 0,
    position: 'relative',
    textAlign: 'center',
  },
};

export default style;
