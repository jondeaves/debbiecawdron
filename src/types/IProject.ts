import { GatsbyImageProps } from 'gatsby-image';

export default interface IProject {
  id: string;
  body: {
    childMarkdownRemark: {
      html: string;
    };
  };
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  previewImage: GatsbyImageProps;
  banner: GatsbyImageProps;
  gallery: GatsbyImageProps[];
}
