import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme, { IStyleThemeProp } from '../../common/themes/ITheme';

export interface IOwnProps {
  title: string;
  isHomepage?: boolean;
  subTitle: string;
}

export interface IStyles {
  container: (
    props: IOwnProps & IStyleThemeProp,
  ) => IStyle & {
    atDesktop: IStyle;
    atPrint: IStyle;
  };

  headings: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
