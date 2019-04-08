import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';
import IProject from '../../../types/IProject';

export interface IOwnProps {
  projects: IProject[];
  showMore?: boolean;
}

export interface IStyles {
  wrapper: IStyle;
  grid: IStyle & {
    '@media (min-width: 640px) and (max-width: 939px)': IStyle;
    '@media (min-width: 940px)': IStyle;
  };
  showMore: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
