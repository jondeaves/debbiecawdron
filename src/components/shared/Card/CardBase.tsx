import classnames from 'classnames';
import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import CardBaseStyles from './CardBase.styles';
import { IOwnProps, IProps, IStyles } from './CardBase.types';

export const CardBase: React.FunctionComponent<IProps> = ({
  children,
  image,
  hover,
  styles,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: IProps) => {
  return (
    <article
      className={styles.wrapper}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {image && (
        <React.Fragment>
          <div className={styles.image}>
            <Img fixed={image.fixed} />
          </div>
          <div
            className={classnames({
              [styles.overlay]: true,
              [styles.overlayHover]: hover,
            })}
          />
        </React.Fragment>
      )}
      {children}
    </article>
  );
};

export default connect<IOwnProps, IStyles, ITheme>(CardBaseStyles)(CardBase);
