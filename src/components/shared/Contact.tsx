import React from 'react';
import { useFela } from 'react-fela';
// tslint:disable-next-line:no-submodule-imports
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

import ITheme from '../../common/themes/ITheme';
import Container from './Container';

import styles from './Contact.styles';
import { IProps } from './Contact.types';
import Link from './Link';

export const Contact: React.FunctionComponent<IProps> = (props: IProps) => {
  const { title } = props;
  const { css } = useFela<ITheme, IProps>(props);

  return (
    <Container
      type="section"
      alignment="left"
      flow="column"
      className={styles.container}
    >
      <h3 className={css(styles.title)}>{title}</h3>

      <Link
        to="mailto:debbie.cawdron@gmail.com"
        label="debbie.cawdron@gmail.com"
        isExternal={true}
        isTrusted={true}
        openInNewWindow={true}
        className={css(styles.link)}
      >
        <FaEnvelope size="2em" className={css(styles.icon)} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/deborah-cawdron/"
        label="https://www.linkedin.com/in/deborah-cawdron/"
        isExternal={true}
        isTrusted={true}
        openInNewWindow={true}
        className={css(styles.link)}
      >
        <FaLinkedin size="2em" className={css(styles.icon)} />
      </Link>
    </Container>
  );
};

export default Contact;
