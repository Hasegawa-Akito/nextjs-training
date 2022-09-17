import { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../src/components/contexts/UserContext";

const Context1: NextPage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  console.log(userInfo);

  return (
    <div>
      <div
        onClick={() =>
          setUserInfo({ user_id: 1, room_id: "a", user_name: "akito" })
        }
      >
        context1
      </div>
      <Link href="/contexts/context2">context2へ</Link>
    </div>
  );
};

export default Context1;
