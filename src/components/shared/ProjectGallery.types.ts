import { IStyle } from 'fela';

import IImageSharpType from '../../types/IImageSharpType';

export interface IProps {
  gallery: IImageSharpType[];
}

export interface IStyles {
  wrapper: IStyle;
  grid: IStyle & {
    atDesktop: IStyle;
  };
  leftGrid: IStyle;
  rightGrid: IStyle;
}
