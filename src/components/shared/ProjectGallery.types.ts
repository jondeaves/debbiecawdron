import { IStyle } from 'fela';
import { GatsbyImageProps } from 'gatsby-image';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IOwnProps {
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

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
