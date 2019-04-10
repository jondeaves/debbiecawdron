import React, { createElement } from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import Link from './Link';

import styles from './HeaderLink.styles';
import { IProps } from './HeaderLink.types';

export const HeaderLink: React.FunctionComponent<IProps> = (props: IProps) => {
  const { as, isPrimary, uri, title } = props;
  const { css } = useFela<ITheme, IProps>(props);
  const component = as || 'div';

  return createElement(
    component,
    {
      className: isPrimary ? css(styles.primary) : css(styles.secondary),
    },
    <Link to={uri} label={title} className={css(styles.link)} />,
  );
};

HeaderLink.defaultProps = {
  as: 'p',
  isPrimary: true,
};

export default HeaderLink;
