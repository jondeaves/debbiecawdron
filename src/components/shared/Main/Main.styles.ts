import { IStyles } from './Main.types';

export default (): IStyles => ({
  container: ({ theme }) => ({
    flexGrow: 1,

    atDesktop: {
      marginTop: theme.spacing.heading,
    },
  }),
});
