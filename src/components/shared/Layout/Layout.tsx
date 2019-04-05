import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { useFela } from 'react-fela';

import { BaseTheme } from '../../../common/themes';

import Header from '../Header';

import styles from './Layout.styles';
import { IProps, IQuery } from './Layout.types';

export const Layout: React.FunctionComponent<IProps> = ({
  children,
}: IProps) => {
  const { site }: IQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const { css } = useFela();

  return (
    <BaseTheme>
      <React.Fragment>
        <Header siteTitle={site.siteMetadata.title} />

        <div className={css(styles.wrapper)}>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </React.Fragment>
    </BaseTheme>
  );
};

export default Layout;
