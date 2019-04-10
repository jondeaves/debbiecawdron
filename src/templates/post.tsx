import { graphql } from 'gatsby';
import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../common/themes/ITheme';

import Banner from '../components/shared/Banner';
import Container from '../components/shared/Container';
import Layout from '../components/shared/Layout';
import ProjectGallery from '../components/shared/ProjectGallery';
import SEO from '../components/shared/Seo';

import PostStyles from './Post.styles';
import { IOwnProps, IProps, IStyles } from './Post.types';

export const Post: React.FunctionComponent<IProps> = ({
  data: {
    contentfulProject: {
      body: {
        childMarkdownRemark: { html },
      },
      banner,
      gallery,
      title,
    },
  },
  styles,
}) => {
  return (
    <Layout>
      <SEO title={title} />

      <Container type="section" alignment="left">
        {banner && (
          <div className={styles.banner}>
            <Banner image={banner} />
          </div>
        )}

        <h1 className={styles.pageTitle}>{title}</h1>

        <article
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {gallery && gallery.length > 0 && <ProjectGallery gallery={gallery} />}
      </Container>
    </Layout>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(PostStyles)(Post);

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      id
      body {
        childMarkdownRemark {
          html
        }
      }
      title
      slug
      banner {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid
        }
      }
      gallery {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
