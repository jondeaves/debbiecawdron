import { IOwnProps, IStyles } from './CardHeader.types';

const styles: IStyles = {
  wrapper: ({ visible }: IOwnProps) => ({
    color: '#4A4A4A',
    opacity: visible ? 1 : 0,
    padding: '19px 25px 0 25px',
    position: 'relative',
    transition: 'opacity 0.3s ease-in',
    zIndex: 3,

    '@media (max-width: 939px)': {
      opacity: 1,
    },
  }),

  mainTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },

  subTitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    marginTop: '17px',
  },
};

export default styles;
