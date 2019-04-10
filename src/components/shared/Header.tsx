import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import HeaderLink from './HeaderLink';
import HeaderNav from './HeaderNav';

import styles from './Header.styles';
import { IProps } from './Header.types';

export const Header: React.FunctionComponent<IProps> = (props: IProps) => {
  const { isHomepage, title, subTitle } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <header role="header" className={css(styles.container)}>
      <div className={css(styles.headings)}>
        <HeaderLink
          isPrimary={true}
          uri="/"
          title={title}
          as={`h${isHomepage ? 1 : 2}`}
        />
        <HeaderLink
          isPrimary={false}
          uri="/"
          title={subTitle}
          as={`h${isHomepage ? 2 : 3}`}
        />
      </div>

      <HeaderNav />
    </header>
  );
};

Header.defaultProps = {
  isHomepage: false,
};

export default Header;
