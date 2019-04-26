import { IStyles } from './ProjectGallery.types';

const styles: IStyles = {
  wrapper: {
    display: 'block',
    width: '100%',
  },

  grid: {
    atDesktop: {
      display: 'grid',

      gridTemplateAreas: `"left right"`,
      gridTemplateColumns: '66.366% 33.633%',
    },
  },

  leftGrid: {
    gridArea: 'left',
  },

  rightGrid: {
    gridArea: 'right',
  },
};

export default styles;
