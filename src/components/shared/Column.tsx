import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Column.styles';
import { IProps } from './Column.types';

export const Column: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return <div className={css(styles.wrapper)}>{children}</div>;
};

Column.defaultProps = {
  spaced: false,
};

export default Column;
