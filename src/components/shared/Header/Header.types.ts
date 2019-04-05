import { IStyle } from 'fela';

import { IStyleThemeProp } from '../../../common/themes/ITheme';

export interface IProps {
  siteTitle: string;
}

export interface IStyles {
  wrapper: IStyle;
  inner: (props: IStyleThemeProp) => IStyle;
  title: IStyle;
  link: IStyle;
}
