import { prisma } from "./prismaClient";

/* 本リストを取得 */
export const prismaBookFindMany = async () => {
  return await prisma.book.findMany({
    include: {
      author: true,
    },
  });
};
