import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import HeaderLink from './HeaderLink';
import HeaderNav from './HeaderNav';

import HeaderStyles from './Header.styles';
import { IOwnProps, IProps, IStyles } from './Header.types';

export const Header: React.FunctionComponent<IProps> = ({
  isHomepage,
  title,
  subTitle,
  styles,
}: IProps) => {
  return (
    <header role="header" className={styles.container}>
      <div className={styles.headings}>
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

export default connect<IOwnProps, IStyles, ITheme>(HeaderStyles)(Header);
