import { createAction, props } from "@ngrx/store";
import { Book } from "../booklist/book.model";


export const addBook = createAction(
    '[Book List] Add Book',
    props<{payload:Book}>()
  );
  