import { margin } from 'polished';

import { IStyles } from './Footer.types';

export default (): IStyles => ({
  container: {
    marginTop: '60px',
    textAlign: 'center',

    atPrint: {
      display: 'none',
    },
  },

  title: {
    color: '#4A4A4A',
    fontSize: '17px',
    ...margin(0),
  },

  subTitle: {
    color: '#A8A8A8',
    fontSize: '14px',
    ...margin(0),
  },

  contentfulWrapper: {
    ...margin(10, 0, 15, 0),
    textAlign: 'center',
  },

  contentfulLink: {
    '&:hover': {
      borderBottom: 0,
    },

    borderBottom: 0,
  },

  contentfulImage: {
    maxWidth: '100px',
    width: '100%',
  },
});
