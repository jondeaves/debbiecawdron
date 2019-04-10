import { IStyle } from 'fela';
import { GatsbyImageProps } from 'gatsby-image';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

export interface IOwnProps {
  image: GatsbyImageProps;
  isHeader?: boolean;
}

export interface IStyles {
  wrapper: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
