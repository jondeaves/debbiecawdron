import { graphql, useStaticQuery } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';

import Container from '../components/shared/Container';

export const useAboutSectionImage: React.FunctionComponent = () => {
  const {
    image,
  }: { image: { childImageSharp: GatsbyImageProps } } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "aboutSection.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  return (
    <Container type="section" flex={false}>
      <Img fluid={image.childImageSharp.fluid} />
    </Container>
  );
};

export default () => useAboutSectionImage;
