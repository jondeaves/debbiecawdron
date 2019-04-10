import { IStyle } from 'fela';
import { GatsbyImageProps } from 'gatsby-image';

export interface IProps {
  children: React.ReactNode;
  hover: boolean;
  image: GatsbyImageProps;

  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface IStyles {
  wrapper: IStyle;

  image: IStyle;

  overlay: IStyle & {
    '@media (max-width: 939px)': IStyle;
  };

  overlayHover: IStyle;
}
