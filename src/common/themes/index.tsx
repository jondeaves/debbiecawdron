import React from 'react';
import { ThemeProvider } from 'react-fela';

import baseTheme from './base';
import ITheme from './ITheme';

const withTheme = (theme: ITheme): React.FunctionComponent => ({
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export const BaseTheme = withTheme(baseTheme);
