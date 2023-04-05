import { getData } from "./api/getData/getData";

export default async function Home() {
  const userData = await getData("user");

  console.log(userData);

  return (
    <>
      <div>컨텐츠</div>
    </>
  );
}
