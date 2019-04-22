import { margin } from 'polished';

import { IStyles } from './Container.types';

const styles: IStyles = {
  wrapper: ({ alignment, flex, flow }) => ({
    maxWidth: '960px',
    padding: '0 36px',
    textAlign: alignment,

    ...margin(0, 'auto'),

    ...(flex
      ? {
          display: 'flex',
          flexDirection: flow ? flow : 'row',
          flexWrap: 'wrap',
          justifyContent: alignment,
        }
      : {}),
  }),
};

export default styles;
