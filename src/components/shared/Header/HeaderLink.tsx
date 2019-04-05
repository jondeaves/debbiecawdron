import React from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import Link from '../Link';

import HeaderLinkStyles from './HeaderLink.styles';
import { IOwnProps, IProps, IStyles } from './HeaderLink.types';

export const HeaderLink: React.FunctionComponent<IProps> = ({
  isPrimary,
  uri,
  styles,
  title,
}: IProps) => {
  return (
    <p className={isPrimary ? styles.primary : styles.secondary}>
      <Link to={uri} label={title} className={styles.link} />
    </p>
  );
};

HeaderLink.defaultProps = {
  isPrimary: true,
};

export default connect<IOwnProps, IStyles, ITheme>(HeaderLinkStyles as any)(
  HeaderLink,
);
