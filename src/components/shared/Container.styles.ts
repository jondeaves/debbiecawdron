import { IStyles } from './Container.types';

const styles: IStyles = {
  wrapper: ({ alignment, flex, flow }) => ({
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '960px',
    padding: '0 36px',
    textAlign: alignment,

    ...(flex
      ? {
          display: 'flex',
          flex: '0 0 885px',
          flexDirection: flow ? flow : 'row',
          flexWrap: 'wrap',
          justifyContent: alignment,
        }
      : {}),
  }),
};

export default styles;
