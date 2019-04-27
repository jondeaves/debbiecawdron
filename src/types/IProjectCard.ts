import { GatsbyImageProps } from 'gatsby-image';

export default interface IProjectCard {
  date: string;
  excerpt: string;
  html: string;
  previewImage: GatsbyImageProps;
  slug: string;
  title: string;
}
