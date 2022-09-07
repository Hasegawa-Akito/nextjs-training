import { NextPage } from "next";
import { useEffect, useState } from "react";
import Child from "../src/components/Child";
import Memo from "../src/components/Memo";
import Prop from "../src/components/Prop";

const Hook: NextPage = () => {
  console.log("Hook再描画");
  const [text, setText] = useState<string>("first");

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div>
      {/* propsで関数を渡す */}
      <Child {...{ text: text, setText: setText }} />

      <Prop text={text} />
      <Memo text="Memo" />
    </div>
  );
};

export default Hook;
