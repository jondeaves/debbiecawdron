import { IStyle } from 'fela';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IStyles {
  container: IStyle & {
    atPrint: IStyle;
  };

  title: IStyle;
  subTitle: IStyle;

  contentfulWrapper: IStyle;

  contentfulLink: IStyle & {
    '&:hover': IStyle;
  };

  contentfulImage: IStyle;
}
