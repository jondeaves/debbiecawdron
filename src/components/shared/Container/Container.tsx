import classnames from 'classnames';
import React, { createElement } from 'react';
import { connect } from 'react-fela';

import ITheme from '../../../common/themes/ITheme';

import ContainerStyles from './Container.styles';
import { IOwnProps, IProps, IStyles } from './Container.types';

export const Container: React.FunctionComponent<IProps> = ({
  children,
  className,
  type,
  styles,
}: IProps) => {
  const component = type || 'div';

  return createElement(
    component,
    {
      className: classnames(styles.wrapper, className),
    },
    children,
  );
};

Container.defaultProps = {
  alignment: 'center',
  flow: 'row',
  type: 'div',
};

export default connect<IOwnProps, IStyles, ITheme>(ContainerStyles)(Container);
