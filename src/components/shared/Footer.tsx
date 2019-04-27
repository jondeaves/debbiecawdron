import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Footer.styles';
import { IProps } from './Footer.types';

export const Footer: React.FunctionComponent<IProps> = (props: IProps) => {
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <footer role="footer" className={css(styles.container)}>
      <p className={css(styles.title)}>Deborah Cawdron</p>
      <p className={css(styles.subTitle)}>BArch (Hons), DipArch</p>
    </footer>
  );
};

export default Footer;
