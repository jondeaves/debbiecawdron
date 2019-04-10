import { IStyles } from './CardBase.types';

const styles: IStyles = {
  wrapper: {
    cursor: 'pointer',
    height: '315px',
    position: 'relative',
    width: '315px',
    zIndex: 0,
  },

  image: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },

  overlay: {
    backgroundColor: 'transparent',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transition: 'background-color 0.3s ease-in',
    width: '100%',
    zIndex: 2,

    '@media (max-width: 939px)': {
      backgroundColor: 'rgba(216,216,216,0.75)',
    },
  },

  overlayHover: {
    backgroundColor: 'rgba(216,216,216,0.75)',
  },
};

export default styles;
