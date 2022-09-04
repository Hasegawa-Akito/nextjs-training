import { Book, Author, User } from "@prisma/client";
type Book = Book;

type Author = Author;

type User = User;

// BookにAouthorを付随させた時の型
type BookWithAuthor = Book & { author: Author };
