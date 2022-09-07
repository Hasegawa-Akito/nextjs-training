// propsで渡される値が変こすると再描画される

import { memo } from "react";

type ChildrenProps = {
  text: string;
};

// 下のコメントはeslintをその部分だけ無効にするという意味。これによりプログラムに影響ないeslintのエラーを防げる
// eslint-disable-next-line react/display-name
const Memo = memo((props: ChildrenProps) => {
  //memoにより親コンポーネントが採苗がされてもpropsの値が変更されない限り際描画されない
  const { text } = props;
  console.log("Memo再描画");
  return <div>{text}</div>;
});

export default Memo;
