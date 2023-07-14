import { IBook } from "./book.interface";
import { Book } from "./book.model";

const getAllBooks = async () => {
  const result = await Book.find({});
  return result;
};

const getLastTenBooks = async () => {
  const result = await Book.find({}).sort({ createdAt: -1 }).limit(10);
  return result;
};

const addBook = async (payload: IBook) => {
  const result = await Book.create(payload);
  return result;
};

export const BookService = {
  getAllBooks,
  getLastTenBooks,
  addBook,
};
