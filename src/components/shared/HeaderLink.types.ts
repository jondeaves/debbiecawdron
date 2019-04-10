import { IStyle } from 'fela';

export interface IProps {
  as?: string;
  isPrimary?: boolean;
  uri: string;
  title: string;
}

export interface IStyles {
  primary: IStyle & {
    atDesktop: IStyle;
  };

  secondary: IStyle & {
    atDesktop: IStyle;
  };

  link: IStyle;
}
