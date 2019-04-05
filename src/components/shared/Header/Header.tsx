import { Link } from 'gatsby';
import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import styles from './Header.styles';
import { IProps } from './Header.types';

export const Header: React.FunctionComponent<IProps> = ({
  siteTitle,
}: IProps) => {
  const { css } = useFela<ITheme>();

  return (
    <header className={css(styles.wrapper)}>
      <div className={css(styles.inner)}>
        <h1 className={css(styles.title)}>
          <Link to="/" className={css(styles.link)}>
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
