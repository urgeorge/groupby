export interface Group {
  id?: number,
  name: string,
  description: string,
  shortDescription: string,
  image: string,
  url: string,
  isPrivate: boolean,
  settings: string,
  createdAt: Date,
}
