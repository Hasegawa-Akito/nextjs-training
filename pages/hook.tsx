import { NextPage } from "next";
import { useEffect, useState } from "react";
import Child from "../src/components/Child";
import Prop from "../src/components/Prop";

const Hook: NextPage = () => {
  const [text, setText] = useState<string>("first");

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div>
      {/* propsで関数を渡す */}
      <Child {...{ text: text, setText: setText }} />

      <Prop text={text} />
    </div>
  );
};

export default Hook;
