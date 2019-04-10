import { IStyle } from 'fela';
import { FelaWithStylesProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

export interface IOwnProps {
  visible?: boolean;
  text: string;
}

export interface IStyles {
  wrapper: (
    props: IOwnProps,
  ) => IStyle & {
    '@media (max-width: 939px)': IStyle;
  };

  wrapperVisible: IStyle;
}

export type IProps = IOwnProps &
  FelaWithStylesProps<IOwnProps, IStyles, ITheme>;
