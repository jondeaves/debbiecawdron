import React from 'react';
import { useFela } from 'react-fela';

import { BaseTheme } from '../../common/themes';
import ITheme from '../../common/themes/ITheme';
import useMeta from '../../hooks/useMeta';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

import styles from './Layout.styles';
import { IProps } from './Layout.types';

export const Layout: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children, isHomepage } = props;
  const { css } = useFela<ITheme, IProps>(props);
  const { title, description } = useMeta();

  return (
    <BaseTheme>
      <div className={css(styles.wrapper)}>
        <Header isHomepage={isHomepage} title={title} subTitle={description} />

        <Main>{children}</Main>
        <Footer />
      </div>
    </BaseTheme>
  );
};

Layout.defaultProps = {
  isHomepage: false,
};

export default Layout;
