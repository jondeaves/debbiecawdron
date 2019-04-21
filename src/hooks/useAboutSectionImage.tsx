import { IStyle } from 'fela';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import React from 'react';
import { useFela } from 'react-fela';

export const useAboutSectionImage: React.FunctionComponent = () => {
  const containerStyles: IStyle & { atContainer: IStyle } = {
    display: 'none',

    atContainer: {
      display: 'block',
    },
  };

  const { css } = useFela();

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
    <div className={css(containerStyles)}>
      <Img fluid={image.childImageSharp.fluid} />
    </div>
  );
};

export default () => useAboutSectionImage;
