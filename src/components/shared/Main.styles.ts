import { margin } from 'polished';

import { IStyles } from './Main.types';

const styles: IStyles = {
  container: ({ theme }) => ({
    flexGrow: 1,

    atDesktop: {
      ...margin(theme.spacing.heading, null, null, null),
    },

    atPrint: {
      ...margin(0, null, null, null),
    },
  }),
};

export default styles;
