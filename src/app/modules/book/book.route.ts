import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/addbook", BookController.addBook);
router.get("/", BookController.getAllBooks);

export const BookRoutes = router;
