import { validateLogin } from "./loginLogic";

export function handleLoginSubmit(id, pw, setError) {
  return (e) => {
    e.preventDefault();
    if (!validateLogin(id, pw)) {
      setError("하나 이상 잘못 입력했습니다.");
    } else {
      setError("");
      console.log("로그인 성공");
    }
  };
}