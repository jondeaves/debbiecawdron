import { IStyles } from './ProjectList.types';

const styles: IStyles = {
  wrapper: {
    display: 'flex',
    flex: '0 0 1',
    flexDirection: 'column',
  },

  grid: {
    display: 'grid',
    gridGap: '7px',
    marginTop: 20,

    '@media (min-width: 640px) and (max-width: 939px)': {
      gridTemplateColumns: '295px 295px',
    },

    '@media (min-width: 940px)': {
      gridTemplateColumns: '315px 315px 315px',
    },
  },

  showMore: {
    marginTop: 20,
    textAlign: 'center',
  },
};

export default styles;
