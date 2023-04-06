import { cookies } from "next/headers";

export const getData = async (user: string) => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get(user);

  //만약에 user라는 name을 가진 쿠키가 없다면
  if (!userCookie) {
    return undefined;
  }

  return userCookie;
};
