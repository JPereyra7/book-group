import { IBookData } from "../models/IBookData";
import { get } from "./serviceBase";

export const bookService = async (): Promise<IBookData> => {
  const inputID = document.getElementById("inputID") as HTMLInputElement;
  const searchBook = inputID.value;
  const url = `https://openlibrary.org/search.json?q=${searchBook}`;
  const data = await get<IBookData>(url);
  return data;
};
