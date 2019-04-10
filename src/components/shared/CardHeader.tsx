import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './CardHeader.styles';
import { IProps } from './CardHeader.types';

export const CardHeader: React.FunctionComponent<IProps> = (props: IProps) => {
  const { title, subTitle } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <div className={css(styles.wrapper)}>
      <h3 className={css(styles.mainTitle)}>{title}</h3>
      <h4 className={css(styles.subTitle)}>{subTitle}</h4>
    </div>
  );
};

CardHeader.defaultProps = {
  visible: true,
};

export default CardHeader;
