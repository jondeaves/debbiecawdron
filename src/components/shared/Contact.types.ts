import { IStyle } from 'fela';

export interface IProps {
  title: string;
}

export interface IStyles {
  container: IStyle;
  title: IStyle & {
    atContainer: IStyle;
  };
  link: IStyle;
  icon: IStyle;
}
