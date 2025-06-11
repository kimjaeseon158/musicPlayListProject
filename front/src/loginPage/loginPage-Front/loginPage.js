import React, { useState } from "react";
import { handleLoginSubmit } from "../loginPage-js/loginPageEvent";
import "../loginPage-css/loginPage.css";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  return (
    <form className="loginBk" onSubmit={handleLoginSubmit(id, pw, setError)}>
      <h2>로그인</h2>
      <div className="login-group">
        <label>
          <span>아이디</span>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </label>
        <label>
          <span>패스워드</span>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </label>
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginPage;
