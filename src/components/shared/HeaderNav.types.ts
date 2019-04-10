import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {}

export interface IStyles {
  list: IStyle & {
    atDesktop: IStyle;
  };

  listItem: IStyle & {
    ':hover': IStyle;
    atDesktop: IStyle;
  };

  link: IStyle & {
    ':hover': IStyle;
    '&.active': IStyle;

    atDesktop: IStyle & {
      ':hover': IStyle;
    };
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
