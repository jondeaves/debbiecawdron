import { IStyle } from 'fela';
import { GatsbyImageProps } from 'gatsby-image';

export interface IProps {
  gallery: GatsbyImageProps[];
}

export interface IStyles {
  wrapper: IStyle;
  grid: IStyle;
  leftGrid: IStyle & {
    '@media (min-width: 1100px)': IStyle;
  };
  rightGrid: IStyle & {
    '@media (min-width: 1100px)': IStyle;
  };
  gridImage: IStyle;
}
