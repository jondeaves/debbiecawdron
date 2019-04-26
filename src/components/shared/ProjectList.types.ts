import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import IProject from '../../types/IProject';

export interface IProps {
  projects: IProject[];
  showMore?: boolean;
}

export interface IStyles {
  grid: (props: StyleProps<ITheme, IProps>) => IStyle;
  showMore: IStyle;
}
