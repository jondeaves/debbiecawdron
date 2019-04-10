import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import ProjectGalleryStyles from './ProjectGallery.styles';
import { IOwnProps, IProps, IStyles } from './ProjectGallery.types';

export const ProjectGallery: React.FunctionComponent<IProps> = ({
  gallery,
  styles,
}: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.leftGrid}>
          <Img fluid={gallery[0].fluid} />
        </div>

        {gallery.length > 1 && (
          <div className={styles.rightGrid}>
            {gallery.length > 1 && (
              <Img fluid={gallery[1].fluid} className={styles.gridImage} />
            )}
            {gallery.length > 2 && (
              <Img fluid={gallery[2].fluid} className={styles.gridImage} />
            )}
            {gallery.length > 3 && (
              <Img fluid={gallery[3].fluid} className={styles.gridImage} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(ProjectGalleryStyles)(
  ProjectGallery,
);
