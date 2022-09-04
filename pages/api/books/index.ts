// pages/api/books/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import type { Book } from "../../../src/type";
import { prismaBookFindMany } from "../../../prisma/apis/books";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) {
  const books = await prismaBookFindMany();
  res.status(200).json(books);
}
