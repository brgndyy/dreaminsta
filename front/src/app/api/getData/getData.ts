import { cookies } from "next/headers";

export const getData = async (user: string) => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get(user);

  //만약에 user라는 name을 가진 쿠키가 없다면
  if (!userCookie) {
    return undefined;
  }

  try {
    // 가져온 쿠키를 서버쪽으로 보낸다 (GET 요청 사용)
    const response = await fetch("http://localhost:3002/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `${user}=${userCookie}`, // 쿠키를 포함한 헤더 설정
      },
    });

    if (!response.ok) {
      throw new Error("로그인 중 에러가 발생했습니다.");
    }

    const userData = await response.json(); // 백엔드에서 반환된 회원 정보를 받아옵니다.
    return userData;
  } catch (err) {
    throw new Error("로그인 중 에러가 발생했습니다.");
  }
};
