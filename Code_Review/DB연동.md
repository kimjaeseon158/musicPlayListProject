# 프론트엔드-백엔드 통신 로직

프론트엔드와 백엔드 간 로그인 데이터 통신을 담당하는 함수의 개요입니다.
이 함수는 사용자 입력을 기반으로 API 요청을 만들고, 서버로부터 받은 결과에 따라 역할 정보를 반환합니다.

# Login API 통신 함수 개요

사용자가 입력한 로그인 정보를 백엔드로 전달하고, 응답 결과에 따라 로그인 성공 여부 및 사용자 역할을 판별합니다.

```js
// ✅ 역할에 따라 전송 데이터 구조 설정
const loginData = dataType === "check_admin_login"
  ? { id, password, admin_code }
  : { id, password };

// ✅ fetch로 Django 백엔드에 요청
const response = await fetch("http://127.0.0.1:8000/api/items/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    data_type: dataType,
    data: loginData
  })
});

const data = await response.json();

// ✅ 사용자 유형에 따른 분기 처리
if (data.message.includes("check_user_login")) {
  return { success: "user", ... };
} else if (data.message.includes("check_admin_login")) {
  return { success: "admin", ... };
}

return { success: false };
}
```
- dataType에 따라 관리자 로그인과 일반 사용자 로그인 데이터 구분 처리
- fetch를 통해 백엔드 API에 POST 요청
- 성공 시 사용자 역할(user 또는 admin)과 관련 데이터를 반환
- 실패 시 success: false 반환 및 에러 콘솔 출력

👉 [로그인 컴포넌트 보기](./Code_Review/login.md)
