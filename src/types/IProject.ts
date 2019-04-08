import { GatsbyImageProps } from 'gatsby-image';

export default interface IProject {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  previewImage: GatsbyImageProps;
}
