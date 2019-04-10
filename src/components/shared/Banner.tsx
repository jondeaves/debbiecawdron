import Img from 'gatsby-image';
import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import BannerStyles from './Banner.styles';
import { IOwnProps, IProps, IStyles } from './Banner.types';

export const Banner: React.FunctionComponent<IProps> = ({
  image,
  isHeader,
  styles,
}: IProps) => {
  const Wrapper = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) =>
    React.createElement(isHeader ? 'header' : 'div', { className }, children);

  return (
    <Wrapper className={styles.wrapper}>
      {image && <Img fluid={image.fluid} style={{ maxWidth: '100%' }} />}
    </Wrapper>
  );
};

Banner.defaultProps = {
  isHeader: false,
};

export default connect<IOwnProps, IStyles, ITheme>(BannerStyles)(Banner);
