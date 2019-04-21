import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Row.styles';
import { IProps } from './Row.types';

export const Row: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <div className={css(styles.wrapper)}>
      {children}
    </div>
  );
};

export default Row;
