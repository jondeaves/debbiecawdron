import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IProps {
  children: React.ReactNode;
}

export interface IStyles {
  container: (
    props: StyleProps<ITheme, IProps>,
  ) => IStyle & {
    atDesktop: IStyle;
  };
}
