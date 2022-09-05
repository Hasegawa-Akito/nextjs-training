export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit // ?はその引数が与えられなくても良い状態
): Promise<any> => {
  const res = await fetch(resource, init);

  if (!res.ok) {
    const errorRes = await res.json();
    const error = new Error(
      errorRes.message ?? "APIリクエスト中にエラーが発生しました"
      // ??はその前の値がnullまたはundifindかどうかを判別
    );

    throw error;
  }

  return res.json();
};
