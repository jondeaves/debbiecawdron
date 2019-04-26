import { border, margin, padding } from 'polished';

import { IStyles } from './Column.types';

const styles: IStyles = {
  wrapper: ({ spaced, width }) => ({
    atContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',

      ...padding(10, 0, 0, 0),

      ...(width ? { flexBasis: width } : {}),

      ...(spaced
        ? {
            ...border('right', 2, 'solid', '#000000'),
            ...margin(null, 30, null, null),
            ...padding(null, 30, null, null),
          }
        : {}),
    },
  }),
};

export default styles;
