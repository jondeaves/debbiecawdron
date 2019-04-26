import { border, margin, padding } from 'polished';

import { IStyles } from './Hero.types';

const style: IStyles = {
  container: {
    ...margin(null, null, 60, null),
  },

  divider: {
    backgroundColor: 'transparent',

    ...border('bottom', 5, 'solid', '#000000'),
    ...margin(15, null, 0, null),
  },

  title: {
    fontSize: 38,
    textTransform: 'uppercase',

    ...margin(null, 0, 0, 0),
    ...padding(0, 0, 0, 0),
  },

  subTitle: {
    fontSize: 14,

    ...margin(20, 0, 0, 0),
    ...padding(0, 0, 0, 0),
  },
};

export default style;
