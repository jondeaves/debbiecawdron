import { margin, padding } from 'polished';

import { IStyles } from './Info.types';

const style: IStyles = {
  container: {
    ...margin(null, null, 40, null),
  },

  title: {
    color: '#AA4000',
    fontSize: 12,
    textTransform: 'uppercase',

    ...margin(0, 0, 19, 0),
    ...padding(0, 0, 0, 0),
  },

  info: {
    fontSize: 12,

    ...margin(0, 0, 0, 0),
    ...padding(0, 0, 0, 0),
  },
};

export default style;
