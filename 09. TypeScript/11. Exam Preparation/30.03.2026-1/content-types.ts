import { BaseContent, ContentType } from "./models";

export abstract class DetailedContent implements BaseContent {
  public readonly id: number;
  public readonly title: string;
  public readonly releaseDate: Date;
  private _type: ContentType;

  public get type(): ContentType {
    return this._type;
  }

  public set type(newType: ContentType) {
    throw new Error("Content type is immutable");
  }

  constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this._type = type;
  }

  public abstract getDetails(): string;

  protected formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}

export class Movie extends DetailedContent {
  public readonly director: string;

  constructor(id: number, title: string, releaseDate: Date, director: string) {
    super(id, title, releaseDate, ContentType.Movie);
    this.director = director;
  }

  public getDetails(): string {
    return `[MOVIE] "${this.title}" directed by ${this.director} (Released: ${this.formatDate(this.releaseDate)})`;
  }
}

export class Series extends DetailedContent {
  public readonly platformUrl: string;

  constructor(
    id: number,
    title: string,
    releaseDate: Date,
    platformUrl: string,
  ) {
    super(id, title, releaseDate, ContentType.Series);
    this.platformUrl = platformUrl;
  }

  public getDetails(): string {
    return `[SERIES] "${this.title}" (Released: ${this.formatDate(this.releaseDate)}), available at: ${this.platformUrl}`;
  }
}

export function findItemById<T extends { id: number }>(
  items: T[],
  id: number,
): T | undefined {
  return items.find((item) => item.id === id);
}
