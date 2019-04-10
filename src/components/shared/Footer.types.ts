import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

// tslint:disable-next-line:no-empty-interface
export interface IOwnProps {}

export interface IStyles {
  container: IStyle & {
    atPrint: IStyle;
  };

  title: IStyle;
  subTitle: IStyle;

  contentfulWrapper: IStyle;

  contentfulLink: IStyle & {
    '&:hover': IStyle;
  };

  contentfulImage: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
