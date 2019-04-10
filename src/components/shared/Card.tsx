import Img from 'gatsby-image';
import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Card.styles';
import { IProps } from './Card.types';

export const Card: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children, image, hover, onMouseEnter, onMouseLeave, onClick } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <article
      className={css(styles.wrapper)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {image && (
        <React.Fragment>
          <div className={css(styles.image)}>
            <Img fixed={image.fixed} />
          </div>
          <div
            className={css(styles.overlay, {
              ...(hover ? styles.overlayHover : {}),
            })}
          />
        </React.Fragment>
      )}
      {children}
    </article>
  );
};

export default Card;
