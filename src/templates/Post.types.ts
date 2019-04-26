import { IStyle } from 'fela';

import IProject from '../types/IProject';

export interface QueryData {
  contentfulProject: IProject;
}

export interface IProps {
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
