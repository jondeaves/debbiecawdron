import { graphql } from 'gatsby';
import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../common/themes/ITheme';

import Banner from '../components/shared/Banner';
import Container from '../components/shared/Container';
import Layout from '../components/shared/Layout';
import ProjectGallery from '../components/shared/ProjectGallery';
import SEO from '../components/shared/Seo';

import styles from './Post.styles';
import { IProps } from './Post.types';

export const Post: React.FunctionComponent<IProps> = props => {
  const {
    data: {
      markdownRemark: {
        html,

        frontmatter: { title, banner, gallery },
      },
    },
  } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <Layout>
      <SEO title={title} />

      <Container type="section" alignment="left">
        {banner && (
          <div className={css(styles.banner)}>
            <Banner image={banner.childImageSharp} />
          </div>
        )}

        <h1 className={css(styles.pageTitle)}>{title}</h1>

        <article
          className={css(styles.body)}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {gallery && gallery.length > 0 && <ProjectGallery gallery={gallery} />}
      </Container>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        banner {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        gallery {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
