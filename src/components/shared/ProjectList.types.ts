import { IStyle } from 'fela';

import IProject from '../../types/IProject';

export interface IProps {
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
