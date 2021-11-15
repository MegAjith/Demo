
import { createReducer,on } from "@ngrx/store";
import { Book } from "../booklist/book.model";
import { AppState } from "./app.state";
import { addBook } from "./books.action";

export const initialState: Array<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(addBook, (state: AppState, { payload })=>{
      return {...state,books:[...state.books, payload]}
    } 
    

 

    )
  );