export type UserInfoType = {
  user_id: number | null;
  room_id: string | null;
  user_name: string | null;
};

export type UserContextType = {
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
};
