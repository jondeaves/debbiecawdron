import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IOwnProps {
  title: string;
  subTitle: string;
  visible?: boolean;
}

export interface IStyles {
  wrapper: (
    props: IOwnProps,
  ) => IStyle & {
    '@media (max-width: 939px)': IStyle;
  };

  mainTitle: IStyle;

  subTitle: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
