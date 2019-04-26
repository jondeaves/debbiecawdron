import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IProps {
  title: string;
  isHomepage?: boolean;
  subTitle: string;
}

export interface IStyles {
  container: (props: StyleProps<ITheme, IProps>) => IStyle;

  inner: IStyle;

  headings: IStyle;
}
