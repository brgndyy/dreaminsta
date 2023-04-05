import classes from "./SignUpModal.module.css";
import IsNotLoginBackDrop from "../IsNotLogin/IsNotLoginBackDrop";

export default function SignUpModal() {
  return (
    <>
      <IsNotLoginBackDrop>
        <h1>회원가입</h1>
      </IsNotLoginBackDrop>
    </>
  );
}
