import { IOwnProps, IStyles } from './CardBody.types';

const styles: IStyles = {
  wrapper: ({ visible }: IOwnProps) => ({
    color: '#4A4A4A',
    fontSize: '19px',
    opacity: visible ? 1 : 0,
    padding: '25px 25px 0 25px',
    position: 'relative',
    transition: 'opacity 0.3s ease-in',
    zIndex: 3,

    '@media (max-width: 939px)': {
      opacity: 1,
    },
  }),

  wrapperVisible: {
    opacity: 1,
  },
};

export default styles;
