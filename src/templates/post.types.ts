import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../common/themes/ITheme';
import IProject from '../types/IProject';

export interface QueryData {
  contentfulProject: IProject;
}

export interface IOwnProps {
  data: QueryData;
}

export interface IStyles {
  banner: IStyle;

  container: IStyle;

  pageTitle: IStyle;

  body: IStyle & {
    '> p': IStyle;
  };
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
