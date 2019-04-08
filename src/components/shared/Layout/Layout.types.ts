import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

export interface IOwnProps {
  children: React.ReactNode;
  isHomepage?: boolean;
}

export interface IQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

export interface IStyles {
  wrapper: IStyle;
  footer: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
