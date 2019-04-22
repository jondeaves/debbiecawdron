import { IStyles } from './HeaderNav.types';

const styles: IStyles = {
  wrapper: {
    position: 'relative',
  },

  list: {
    listStyle: 'none',
    margin: '25px 0 5px 0',
    padding: 0,
    textAlign: 'center',

    atDesktop: {
      position: 'absolute',
      right: 0,
    },
  },

  listItem: {
    boxSizing: 'border-box',
    color: '#333333',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',

    ':last-child': {
      marginLeft: 10,
    },

    ':hover': {
      color: '#333333',
    },

    atDesktop: {
      fontSize: '14px',
      height: '80px',

      ':last-child': {
        marginLeft: 20,
      },
    },
  },

  link: {
    borderBottom: '1px solid transparent',
    color: 'inherit',
    display: 'block',
    textDecoration: 'none',

    ':hover': {
      borderBottomColor: '#333333',
    },

    ':active': {
      borderBottomColor: '#333333',
    },

    '&.active': {
      borderBottomColor: '#333333',
    },

    atDesktop: {
      borderBottomWidth: '3px',

      ':hover': {
        borderBottomColor: '#333333',
        borderBottomWidth: '3px',
      },

      ':active': {
        borderBottomColor: '#333333',
        borderBottomWidth: '3px',
      },
    },
  },
};

export default styles;
