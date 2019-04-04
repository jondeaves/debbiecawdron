import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Header from '../Header';

import { IProps, IQuery } from './Layout.types';

import './layout.css';

export const Layout: React.FunctionComponent<IProps> = ({
  children,
}: IProps) => {
  const { site } = useStaticQuery<IQuery>(
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

  return (
    <React.Fragment>
      <Header siteTitle={site.siteMetadata.title} />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
