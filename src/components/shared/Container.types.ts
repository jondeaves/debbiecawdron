import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IProps {
  alignment?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: IStyle;
  flex?: boolean;
  flow?: 'column' | 'row';
  type: string;
}

export interface IStyles {
  wrapper: (props: StyleProps<ITheme, IProps>) => IStyle;
}
