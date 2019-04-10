import { IStyle } from 'fela';
import { GatsbyImageProps } from 'gatsby-image';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IOwnProps {
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

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
