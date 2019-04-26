import { margin, padding } from 'polished';

import { IStyles } from './Experience.types';

const style: IStyles = {
  container: {
    ...margin(null, null, 30, null),
  },

  description: {
    color: '#666666',
    fontSize: 12,

    ...margin(0, 0, 7, 0),
    ...padding(0, 0, 0, 0),

    ':first-child': {
      ...margin(7, null, null, null),
    },
  },

  title: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 300,
    lineHeight: '1.2rem',

    ...margin(0, 0, 7, 0),
    ...padding(0, 0, 0, 0),
  },

  subTitle: {
    color: '#666666',
    fontSize: 10,
    fontWeight: 300,

    ...margin(7, 0, 7, 0),
    ...padding(0, 0, 0, 0),
  },
};

export default style;
