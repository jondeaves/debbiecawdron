import { margin, padding } from 'polished';

import { IStyles } from './Contact.types';

const style: IStyles = {
  container: {
    ...margin(null, null, 30, null),
  },

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

    ...margin(0, 0, 5, 0),
  },

  icon: {
    position: 'relative',
    top: 8,

    ...margin(0, 10, 0, 0),
  },
};

export default style;
