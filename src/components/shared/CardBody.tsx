import React from 'react';
import { useFela } from 'react-fela';

import ITheme from '../../common/themes/ITheme';

import styles from './CardBody.styles';
import { IProps } from './CardBody.types';

export const CardBody: React.FunctionComponent<IProps> = (props: IProps) => {
  const { text } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <div className={css(styles.wrapper)}>
      <p>{text}</p>
    </div>
  );
};

CardBody.defaultProps = {
  visible: true,
};

export default CardBody;
