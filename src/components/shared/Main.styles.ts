import { margin } from 'polished';

import { IStyles } from './Main.types';

export const styles: IStyles = {
  container: ({ theme }) => ({
    flexGrow: 1,

    atDesktop: {
      ...margin(theme.spacing.heading, null, null, null),
    },
  }),
};

export default styles;
