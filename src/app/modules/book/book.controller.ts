import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { BookService } from "./book.service";
import { IBook } from "./book.interface";
import httpStatus from "http-status";
import { sendResponse } from "../../../shared/sendResponse";

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved Successfully",
    data: result,
  });
});

export const BookController = {
  getAllBooks,
};
