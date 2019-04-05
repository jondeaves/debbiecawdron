import { margin, padding } from 'polished';

import { IStyles } from './Layout.types';

const style: IStyles = {
  wrapper: {
    maxWidth: 960,

    ...margin(0, 'auto'),
    ...padding(0, '1.0875rem', '1.45rem', '1.0875rem'),
  },
};

export default style;
