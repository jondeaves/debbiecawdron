import { IStyle } from 'fela';
import { GatsbyImageProps } from 'gatsby-image';

export interface IProps {
  gallery: GatsbyImageProps[];
}

export interface IStyles {
  wrapper: IStyle;
  grid: IStyle & {
    atDesktop: IStyle;
  };
  leftGrid: IStyle;
  rightGrid: IStyle;
}
