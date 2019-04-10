import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IProps {
  visible?: boolean;
  text: string;
}

export interface IStyles {
  wrapper: (
    props: StyleProps<ITheme, IProps>,
  ) => IStyle & {
    '@media (max-width: 939px)': IStyle;
  };

  wrapperVisible: IStyle;
}
