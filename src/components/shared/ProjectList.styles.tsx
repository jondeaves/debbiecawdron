import { margin } from 'polished';

import { IStyles } from './ProjectList.types';

const styles: IStyles = {
  grid: ({ showMore }) => ({
    display: 'grid',
    gridGap: '7px',
    gridTemplateColumns: 'auto',

    ...margin(showMore ? '1.5rem' : '3.5rem', 0, 0, 0),

    atDesktop: {
      gridTemplateColumns: 'auto auto',
    },

    atContainer: {
      gridTemplateColumns: 'auto auto auto',
    },
  }),

  showMore: {
    marginTop: 20,
    textAlign: 'center',
  },
};

export default styles;
