import { IStyle } from 'fela';

// tslint:disable-next-line:no-empty-interface
export interface IProps {}

export interface IStyles {
  list: IStyle & {
    atDesktop: IStyle;
  };

  listItem: IStyle & {
    ':hover': IStyle;
    atDesktop: IStyle;
  };

  link: IStyle & {
    ':hover': IStyle;
    '&.active': IStyle;

    atDesktop: IStyle & {
      ':hover': IStyle;
    };
  };
}
