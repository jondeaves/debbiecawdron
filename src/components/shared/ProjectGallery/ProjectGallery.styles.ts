import { IStyles } from './ProjectGallery.types';

const styles: IStyles = {
  wrapper: {
    display: 'block',
    width: '100%',
  },

  grid: {
    position: 'relative',
  },

  leftGrid: {
    '@media (min-width: 1100px)': {
      maxWidth: '636px',
    },
  },

  rightGrid: {
    marginTop: '5px',

    '@media (min-width: 1100px)': {
      display: 'block',
      marginTop: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '319px',
    },
  },

  gridImage: {
    marginBottom: '5px',
  },
};

export default styles;
