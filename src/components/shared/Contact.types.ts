import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IProps {
  smallScreen?: boolean;
  title: string;
}

export interface IStyles {
  container: (props: StyleProps<ITheme, IProps>) => IStyle;
  title: IStyle & {
    atContainer: IStyle;
  };
  link: IStyle & {
    atContainer: IStyle;
    '&:hover, :active, :visited': IStyle;
  };
  linkSpaced: IStyle & {
    atContainer: IStyle;
  };
  linkBlock: IStyle;
  linkBlockSpaced: IStyle & { atContainer: IStyle };
  icon: IStyle;
}
