import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  uploader?: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
