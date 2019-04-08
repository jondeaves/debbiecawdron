import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { connect } from 'react-fela';

import { BaseTheme } from '../../../common/themes';
import ITheme from '../../../common/themes/ITheme';

import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

import LayoutStyles from './Layout.styles';
import { IOwnProps, IProps, IQuery, IStyles } from './Layout.types';

export const Layout: React.FunctionComponent<IProps> = ({
  children,
  isHomepage,
  styles,
}: IProps) => {
  const { site }: IQuery = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  return (
    <BaseTheme>
      <div className={styles.wrapper}>
        <Header
          isHomepage={isHomepage}
          title={site.siteMetadata.title}
          subTitle={site.siteMetadata.description}
        />

        <Main>{children}</Main>
        <Footer />
      </div>
    </BaseTheme>
  );
};

Layout.defaultProps = {
  isHomepage: false,
};

export default connect<IOwnProps, IStyles, ITheme>(LayoutStyles)(Layout);
