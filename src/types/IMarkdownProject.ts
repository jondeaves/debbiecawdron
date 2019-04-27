import IImageSharpType from './IImageSharpType';

export default interface IMarkdownProject {
  node: {
    html: string;
    frontmatter: {
      banner: IImageSharpType;
      date: string;
      excerpt: string;
      gallery: IImageSharpType[];
      featured: boolean;
      previewImage: IImageSharpType;
      slug: string;
      title: string;
    };
  };
}
