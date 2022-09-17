import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../src/components/contexts/UserContext";

const Context2: NextPage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  // page間のcontextはlinkで遷移しても値は保たれる
  console.log(userInfo);

  return (
    <div>
      <div>context2</div>
    </div>
  );
};

export default Context2;
