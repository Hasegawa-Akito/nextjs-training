import { useQuery } from "react-query";
import { BookWithAuthor } from "../../type";

// useQueryを複数場所で使える様独自のhooksを作成
export const useBooks = (): { data: BookWithAuthor[]; isLoading: boolean } => {
  const { data, isLoading, error } = useQuery<BookWithAuthor[], Error>(
    "books",
    async () => {
      const response = await fetch("/api/books", {
        method: "GET",
      });
      return await response.json();
    }
  );

  if (error) {
    console.error(error);
  }

  return { data: data ? data : [], isLoading };
};
