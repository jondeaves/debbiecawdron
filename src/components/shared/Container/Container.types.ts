import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

export interface IOwnProps {
  alignment?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
  flow?: 'column' | 'row';
  type: string;
}

export interface IStyles {
  wrapper: (props: IOwnProps) => IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
