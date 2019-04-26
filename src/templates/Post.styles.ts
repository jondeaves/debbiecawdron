import { IStyles } from './Post.types';

const styles: IStyles = {
  banner: {
    marginTop: '3.5rem',
    width: '100%',
  },

  container: {
    display: 'block',
  },

  pageTitle: {
    fontSize: '48px',
  },

  body: {
    fontSize: '20px',
    marginBottom: '35px',
    width: '100%',

    '> p': {
      marginBottom: '15px',
      width: '100%',
    },
  },
};

export default styles;
