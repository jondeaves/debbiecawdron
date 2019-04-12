import { IStyle } from 'fela';
import IExperience from '../../types/IExperience';

export interface IProps {
  items: IExperience[];
  title: string;
}

export interface IStyles {
  container: IStyle;
  title: IStyle;
}
