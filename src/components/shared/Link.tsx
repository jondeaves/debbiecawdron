import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Link.styles';
import { IFinalProps, IProps } from './Link.types';

export const Link: React.FunctionComponent<IProps> = (props: IProps) => {
  const {
    children,
    to,
    label,
    className,
    isExternal,
    openInNewWindow,
    isTrusted,
  } = props;
  const { css } = useFela<ITheme, IProps>(props);

  // Calculate what is needed in rel
  let rel = '';
  if (isExternal) {
    rel = [rel, 'external'].join(' ');
  }

  if (!isTrusted) {
    rel = [rel, 'noopener', 'noreferrer'].join(' ');
  }

  // Add to class if required
  let tmpClassName: typeof className = className;
  if (isExternal) {
    tmpClassName = [className, 'external'].join(' ');
  }

  const linkProps: IProps & IFinalProps = {
    className: tmpClassName,
    href: undefined,
    label,
    rel,
    target: openInNewWindow ? '_blank' : undefined,
    to,
  };

  if (!isExternal) {
    return (
      <GatsbyLink activeClassName="active" {...linkProps}>
        {children}
        {label}
        {isExternal && (
          <span className={css(styles.externalLabel)}> (external link)</span>
        )}
      </GatsbyLink>
    );
  }

  // External links use default <a> element
  linkProps.href = to;
  delete linkProps.to;

  return (
    <a {...linkProps}>
      {children}
      {label}
      {isExternal && (
        <span className={css(styles.externalLabel)}> (external link)</span>
      )}
    </a>
  );
};

Link.defaultProps = {
  className: '',
  isExternal: false,
  isTrusted: true,
  openInNewWindow: false,
};

export default Link;
