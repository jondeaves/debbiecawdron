import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IProps {
  children: React.ReactNode;
  spaced?: boolean;
  width?: string;
}

export interface IStyles {
  wrapper: (
    props: StyleProps<ITheme, IProps>,
  ) => IStyle & { atContainer: IStyle };
}
