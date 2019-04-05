import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme, { IStyleThemeProp } from '../../../common/themes/ITheme';

export interface IOwnProps {
  children: React.ReactNode;
}

export interface IStyles {
  container: (
    props: IOwnProps & IStyleThemeProp,
  ) => IStyle & {
    atDesktop: IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
