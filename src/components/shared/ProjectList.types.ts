import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import IProjectCard from '../../types/IProjectCard';

export interface IProps {
  projects: IProjectCard[];
  showMore?: boolean;
}

export interface IStyles {
  grid: (props: StyleProps<ITheme, IProps>) => IStyle;
  showMore: IStyle;
}
