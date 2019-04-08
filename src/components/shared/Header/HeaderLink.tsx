import React, { createElement } from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import Link from '../Link';

import HeaderLinkStyles from './HeaderLink.styles';
import { IOwnProps, IProps, IStyles } from './HeaderLink.types';

export const HeaderLink: React.FunctionComponent<IProps> = ({
  as,
  isPrimary,
  uri,
  styles,
  title,
}: IProps) => {
  const component = as || 'div';

  return createElement(
    component,
    {
      className: isPrimary ? styles.primary : styles.secondary,
    },
    <Link to={uri} label={title} className={styles.link} />,
  );
};

HeaderLink.defaultProps = {
  as: 'p',
  isPrimary: true,
};

export default connect<IOwnProps, IStyles, ITheme>(HeaderLinkStyles as any)(
  HeaderLink,
);
