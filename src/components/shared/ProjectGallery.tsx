import Img from 'gatsby-image';
import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './ProjectGallery.styles';
import { IProps } from './ProjectGallery.types';

export const ProjectGallery: React.FunctionComponent<IProps> = (
  props: IProps,
) => {
  const { gallery } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.grid)}>
        <div className={css(styles.leftGrid)}>
          <Img fluid={gallery[0].fluid} />
        </div>

        {gallery.length > 1 && (
          <div className={css(styles.rightGrid)}>
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

export default ProjectGallery;
