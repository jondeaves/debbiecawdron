import { margin } from 'polished';

import { IStyles } from './ProjectCard.types';

const styles: IStyles = {
  wrapper: {
    cursor: 'pointer',
    position: 'relative',
  },

  overlay: ({ hover }) => ({
    backgroundColor: 'rgba(216,216,216,0.75)',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transition: 'background-color 0.3s ease-in',
    width: '100%',

    atContainer: {
      backgroundColor: hover ? 'rgba(216, 216, 216, 0.75)' : 'transparent',
    },
  }),

  faded: ({ hover }) => ({
    opacity: 1,
    padding: '0 25px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'opacity 0.3s ease-in',
    width: '100%',

    atContainer: {
      opacity: hover ? 1 : 0,
    },
  }),

  mainTitle: {
    color: '#333333',
    fontSize: '24px',
    fontWeight: 'bold',

    ...margin(0, null, 10, null),
  },

  subTitle: {
    color: '#333333',
    fontSize: '12px',
    fontWeight: 'bold',

    ...margin(0, null, null, null),
  },

  body: {
    color: '#333333',
    fontSize: '19px',

    ...margin(0, null, 0, null),
  },
};

export default styles;
