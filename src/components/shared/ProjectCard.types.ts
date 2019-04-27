import { IStyle } from 'fela';
import { StyleProps } from 'react-fela';

import ITheme from '../../common/themes/ITheme';
import IProjectCard from '../../types/IProjectCard';

export interface IProps {
  project: IProjectCard;
}

export interface IStyleProps extends IProps {
  hover: boolean;
}

export interface IStyles {
  wrapper: IStyle;

  overlay: (
    props: StyleProps<ITheme, IStyleProps>,
  ) => IStyle & {
    atContainer: IStyle;
  };

  faded: (
    props: StyleProps<ITheme, IStyleProps>,
  ) => IStyle & {
    atContainer: IStyle;
  };

  mainTitle: IStyle;

  subTitle: IStyle;

  body: IStyle;
}
