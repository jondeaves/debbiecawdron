import { border } from 'polished';

import { IStyles } from './Header.types';

const style: IStyles = {
  container: ({ theme }) => ({
    backgroundColor: theme.color.background,
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 20,

    ...border('1px', 'solid', theme.color.border),

    atDesktop: {
      height: theme.spacing.heading,
      position: 'fixed',
    },

    atPrint: {
      display: 'none',
    },
  }),

  headings: {
    display: 'block',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
};

export default style;
