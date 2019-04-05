import { border } from 'polished';

import { IStyles } from './Header.types';

const style: IStyles = {
  container: ({ theme }) => ({
    ...border('1px', 'solic', theme.color.border),
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 20,

    atDesktop: {
      height: '80px',
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
