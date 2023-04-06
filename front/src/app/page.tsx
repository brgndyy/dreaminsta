import { getData } from "./api/getData/getData";
import IsNotLogin from "./components/Modal/IsNotLogin/IsNotLogin";

export default async function Home() {
  const userData = await getData("user_cookie");

  console.log(userData);

  return (
    <>
      {!userData && <IsNotLogin />}
      <div>컨텐츠</div>
    </>
  );
}
