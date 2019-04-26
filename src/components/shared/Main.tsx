import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Main.styles';
import { IProps } from './Main.types';

export const Main: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <main role="main" className={css(styles.container)}>
      {children}
    </main>
  );
};

export default Main;
