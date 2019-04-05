import { margin, padding } from 'polished';

import { IStyles } from './Header.types';

const style: IStyles = {
  wrapper: {
    background: 'rebeccapurple',

    ...margin(null, null, '1.45rem', null),
  },

  inner: ({ theme }) => ({
    maxWidth: theme.container.maxWidth,

    ...margin(0, 'auto'),
    ...padding('1.45rem', '1.0875rem'),
  }),

  title: {
    ...margin(0),
  },

  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default style;
