import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type SSGProps = {
  message: string;
};

const IndividuaSSG = (props: SSGProps) => {
  const router = useRouter();

  // fallbackのためのローディング表示
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <h1>{props.message}</h1>;
};

// ssgの際はあらかじめbuild時にページを生成しておくため
// pathにあわせたページを事前に生成しておくことは基本的に不可
// ただしgetStaticPathを用いて指定しておいたpathに関しては事前に生成しておくことが可能
// 指定したもの以外はfallbackがfalseの時は404が表示されるようになっている
// fallbackがtureのときは、404にならず、クライアントには初回にfallbackのためのローディング状態を見せ
// その間にそのパスのページを生成し、その生成されたページをユーザに見せる
// 他の人が次にそのパスのページを開いても、すでに生成されているので高速で表示される。ローディング状態は見ることはない
// fallbackのためのローディングは自分で作成する必要がある
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const id = context.params?.id;
  console.log(`Received dynamic path: ${id}`);

  const timestamp = new Date().toLocaleString();
  const message = `このページはid${timestamp}専用です`;

  return {
    props: {
      message: message,
    },
  };
};

export default IndividuaSSG;
