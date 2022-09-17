import { createContext } from "react";
import type { UserContextType } from "../../types/user/type";

export const initUserInfoValue = {
  user_id: null,
  room_id: null,
  user_name: null,
};
export const UserContext = createContext<UserContextType>({
  userInfo: initUserInfoValue,
  setUserInfo: (userInfo) => {},
});
