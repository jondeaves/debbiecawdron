import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import Link from './Link';

import styles from './HeaderNav.styles';
import { IProps } from './HeaderNav.types';

export const Header: React.FunctionComponent<IProps> = (props: IProps) => {
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <nav className={css(styles.wrapper)}>
      <ul className={css(styles.list)}>
        <li className={css(styles.listItem)}>
          <Link
            to="/about"
            label="About"
            isExternal={false}
            className={css(styles.link)}
          />
        </li>
        <li className={css(styles.listItem)}>
          <Link
            to="/work"
            label="Work"
            isExternal={false}
            className={css(styles.link)}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
