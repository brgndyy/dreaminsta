import { cookies } from "next/headers";

export const getData = async (user: string) => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get(user);

  //만약에 user라는 name을 가진 쿠키가 없다면
  if (!userCookie) {
    return undefined;
  }

  try {
    //백엔드로 쿠키를 보내서 해당 쿠키에 맞는 회원정보를 가져옴
  } catch (err) {
    throw new Error("회원정보를 가져오는데에 실패했습니다.");
  }
};
