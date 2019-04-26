import { IStyle } from 'fela';
import IExperience from '../../types/IExperience';

export interface IProps {
  item: IExperience;
}

export interface IStyles {
  container: IStyle;
  description: IStyle & {
    ':first-child': IStyle;
  };
  subTitle: IStyle;
  title: IStyle;
}
