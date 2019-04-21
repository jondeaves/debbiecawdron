import React from 'react';
import { useFela } from 'react-fela';
// tslint:disable-next-line:no-submodule-imports
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

import ITheme from '../../common/themes/ITheme';

import styles from './Contact.styles';
import { IProps } from './Contact.types';
import Link from './Link';

export const Contact: React.FunctionComponent<IProps> = (props: IProps) => {
  const { title } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <div className={css(styles.container)}>
      <h3 className={css(styles.title)}>{title}</h3>

      <div className={css(styles.linkBlock)}>
        <FaEnvelope size="1.8em" className={css(styles.icon)} />
        <Link
          to="mailto:debbie.cawdron@gmail.com"
          label="debbie.cawdron@gmail.com"
          isExternal={true}
          isTrusted={true}
          openInNewWindow={true}
          className={css(styles.link, styles.linkSpaced)}
        />
      </div>

      <div className={css(styles.linkBlock, styles.linkBlockSpaced)}>
        <FaLinkedin size="2em" className={css(styles.icon)} />
        <Link
          to="https://www.linkedin.com/in/deborah-cawdron/"
          label="www.linkedin.com/in/deborah-cawdron/"
          isExternal={true}
          isTrusted={true}
          openInNewWindow={true}
          className={css(styles.link)}
        />
      </div>
    </div>
  );
};

Contact.defaultProps = {
  smallScreen: false,
};

export default Contact;
