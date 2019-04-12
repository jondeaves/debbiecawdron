import React, { createElement } from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './Container.styles';
import { IProps } from './Container.types';

export const Container: React.FunctionComponent<IProps> = (props: IProps) => {
  const { children, className, type } = props;
  const { css } = useFela<ITheme, IProps>(props);
  const component = type || 'div';

  return createElement(
    component,
    {
      className: css(styles.wrapper, className ? className : {}),
    },
    children,
  );
};

Container.defaultProps = {
  alignment: 'center',
  flow: 'row',
  type: 'div',
};

export default Container;
