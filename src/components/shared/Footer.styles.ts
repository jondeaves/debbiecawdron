import { margin, padding } from 'polished';

import { IStyles } from './Footer.types';

const styles: IStyles = {
  container: {
    textAlign: 'center',

    ...margin(60, 0, 0, 0),
    ...padding(0, 0, 20, 0),

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
};

export default styles;
