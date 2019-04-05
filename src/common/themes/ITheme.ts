export default interface ITheme {
  color: {
    primary: string;
    secondary: string;
    additional: string;
  };

  container: {
    maxWidth: number;
  };
}

export interface IStyleThemeProp {
  theme: ITheme;
}
