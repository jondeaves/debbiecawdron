import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IOwnProps {
  as?: string;
  isPrimary?: boolean;
  uri: string;
  title: string;
}

export interface IStyles {
  primary: IStyle & {
    atDesktop: IStyle;
  };

  secondary: IStyle & {
    atDesktop: IStyle;
  };

  link: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
