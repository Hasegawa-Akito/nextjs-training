import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  UserContext,
  initUserInfoValue,
} from "../src/components/contexts/UserContext";
import type { UserInfoType } from "../src/types/user/type";
import { useState } from "react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [userInfo, setUserInfo] = useState<UserInfoType>(initUserInfoValue);
  const userInfoValue = { userInfo, setUserInfo };
  return (
    <UserContext.Provider value={userInfoValue}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default MyApp;
