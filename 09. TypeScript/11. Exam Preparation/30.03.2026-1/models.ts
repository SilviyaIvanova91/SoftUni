export enum ContentType {
  Movie,
  Series,
  Documentary,
}

export interface BaseContent {
  id: number;
  title: string;
  releaseDate: Date;
  type: ContentType;
}

export interface Viewer {
  name: string;
  email: string;
}

export interface WithId {
  id: number;
}
