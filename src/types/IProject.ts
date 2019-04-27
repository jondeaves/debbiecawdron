import { GatsbyImageProps } from 'gatsby-image';

import IProjectCard from './IProjectCard';

export default interface IProject extends IProjectCard {
  banner: GatsbyImageProps;
  gallery: GatsbyImageProps[];
}
