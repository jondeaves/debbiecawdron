import { IStyle } from 'fela';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';

import Container from '../components/shared/Container';

export const useAboutRenderImage: React.FunctionComponent = () => {
  const containerStyles: IStyle = {
    marginTop: 10,
  };

  const {
    image,
  }: { image: { childImageSharp: GatsbyImageProps } } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "aboutRender.png" }) {
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
    <Container type="section" flex={false} className={containerStyles}>
      <Img fluid={image.childImageSharp.fluid} />
    </Container>
  );
};

export default () => useAboutRenderImage;
