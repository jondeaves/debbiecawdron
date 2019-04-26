import { IStyle } from 'fela';
import { GatsbyImageProps } from 'gatsby-image';

export interface IProps {
  image: GatsbyImageProps;
  isHeader?: boolean;
}

export interface IStyles {
  wrapper: IStyle;
}
