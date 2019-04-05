import { IStyle } from 'fela';

export interface IProps {
  children: React.ReactNode;
}

export interface IStyles {
  wrapper: IStyle;
}

export interface IQuery {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}
