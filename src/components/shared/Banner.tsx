import Img from 'gatsby-image';
import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Banner.styles';
import { IProps } from './Banner.types';

export const Banner: React.FunctionComponent<IProps> = (props: IProps) => {
  const { image, isHeader } = props;

  const { css } = useFela<ITheme, IProps>(props);

  const Wrapper = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) =>
    React.createElement(isHeader ? 'header' : 'div', { className }, children);

  return (
    <Wrapper className={css(styles.wrapper)}>
      {image && <Img fluid={image.fluid} style={{ maxWidth: '100%' }} />}
    </Wrapper>
  );
};

Banner.defaultProps = {
  isHeader: false,
};

export default Banner;
