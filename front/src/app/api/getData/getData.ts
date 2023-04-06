import { cookies } from "next/headers";

export const getData = async (user: string) => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get(user);

  //만약에 user라는 name을 가진 쿠키가 없다면
  if (!userCookie) {
    return undefined;
  }

  try {
    // 가져온 쿠키를 서버쪽으로 보내기
    const response = await fetch("http://localhost:3002/api/user", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("로그인 중 에러가 발생했습니다.");
    }

    const userData = await response.json(); // 회원정보 받아오기
    return userData;
  } catch (err) {
    throw new Error("로그인 중 에러가 발생했습니다.");
  }
};
