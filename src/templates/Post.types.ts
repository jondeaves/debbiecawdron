import { IStyle } from 'fela';

import IImageSharpType from '../types/IImageSharpType';

export interface QueryData {
  markdownRemark: {
    html: string;

    frontmatter: {
      title: string;
      slug: string;
      banner: IImageSharpType;
      gallery: IImageSharpType[];
    };
  };
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
