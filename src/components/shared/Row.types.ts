import { IStyle } from 'fela';

export interface IProps {
  children: React.ReactNode;
}

export interface IStyles {
  wrapper: IStyle & { atContainer: IStyle };
}
