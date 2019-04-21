import { margin, padding } from 'polished';

import { IStyles } from './Contact.types';

const style: IStyles = {
  container: ({ smallScreen }) => ({
    ...(smallScreen
      ? {
          display: 'flex',

          atContainer: { display: 'none' },

          ...margin(null, null, 30, null),
        }
      : {
          display: 'none',

          atContainer: { display: 'flex' },

          ...margin(null, null, 70, null),
        }),

    flexDirection: 'column',
  }),

  title: {
    color: '#AA4000',
    display: 'none',
    fontSize: 12,
    textTransform: 'uppercase',

    ...margin(0, 0, 30, 0),
    ...padding(0, 0, 0, 0),

    atContainer: {
      display: 'block',
    },
  },

  link: {
    alignSelf: 'flex-start',
    borderColor: 'transparent',
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '12px',

    ...margin(10, 0, 5, 0),

    atContainer: {
      ...margin(5, null, null, null),
    },

    '&:hover, :active, :visited': {
      border: 0,
    },
  },

  linkSpaced: {
    ...margin(10, null, null, null),

    atContainer: {
      ...margin(10, null, null, null),
    },
  },

  linkBlock: {
    display: 'flex',

    ...margin(5, 0, 0, 0),
  },

  linkBlockSpaced: {
    left: '-2px',
    position: 'relative',

    atContainer: {
      left: 0,
    },
  },

  icon: {
    position: 'relative',

    ...margin(0, 10, 0, 0),
  },
};

export default style;
