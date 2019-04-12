import { margin, padding } from 'polished';

import { IStyles } from './ExperienceList.types';

const style: IStyles = {
  container: {
    ...margin(null, null, 30, null),
  },

  title: {
    color: '#AA4000',
    fontSize: 12,
    textTransform: 'uppercase',

    ...margin(0, 0, 30, 0),
    ...padding(0, 0, 0, 0),
  },
};

export default style;
