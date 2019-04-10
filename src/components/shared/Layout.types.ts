import { IStyle } from 'fela';

export interface IProps {
  children: React.ReactNode;
  isHomepage?: boolean;
}

export interface IStyles {
  wrapper: IStyle;
  footer: IStyle;
}
