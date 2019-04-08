import { IOwnProps, IStyles } from './Container.types';

const styles = (): IStyles => ({
  wrapper: ({ alignment, flow }: IOwnProps) => ({
    display: 'flex',
    flex: '0 0 885px',
    flexDirection: flow ? flow : 'row',
    flexWrap: 'wrap',
    justifyContent: alignment,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '960px',
    padding: '0 62px',
    textAlign: alignment,
  }),
});

export default styles;
