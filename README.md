# 로그인 컴포넌트 개요

이 컴포넌트는 **관리자(Admin)** 와 **사원(Staff)** 로그인을 처리합니다.

- 역할에 따라 입력 필드를 전환합니다.
- 입력값 유효성 검사를 수행합니다.
- 로그인 후 사용자 역할에 맞는 페이지로 라우팅합니다.
- 애니메이션 효과로 부드러운 UX를 제공합니다.

---

## 역할 전환 UI 처리

```jsx
const [role, setRole] = useState("admin");

<motion.div
  animate={{ x: role === "admin" ? "0%" : "100%" }}
  ...
/>
```

- 관리자와 사원 버튼을 클릭하면 `role` 상태가 변경되며, 입력 폼이 애니메이션과 함께 전환됩니다.
- `framer-motion`의 `animate` 기능을 통해 부드러운 시각 전환을 구현했습니다.

---

## 🔎 입력 필드 관리

```js
const handleChange = (e) => {
  const { id, value } = e.target;
  switch (id) {
    case "adminId":
    case "staffId":
      setId(value);
      break;
    case "adminPassword":
    case "staffPw":
      setPassword(value);
      break;
    case "adminOtp":
      if (/^\d*$/.test(value)) {
        setadmin_code(value);
      }
      break;
    default:
      console.log("값이 입력되지 않음");
  }
};
```

- 역할별로 `id`와 `password` 필드의 `id` 값이 다르기 때문에 switch-case 문으로 분기 처리합니다.
- OTP는 숫자만 입력되도록 정규식을 적용했습니다.

---

## 유효성 검사 (`validation` 모듈)

```js
const isValid = await validation({
  id,
  setId,
  password,
  setPassword,
  admin_code,
  setadmin_code,
  role,
  rgxCnd,
  setErrors
});

```

- 외부 `validation` 함수를 호출하여 입력값의 유효성을 검사합니다.
- 검사 결과가 실패하면 `setErrors`로 에러 메시지를 출력합니다.

---

## 로그인 처리 및 라우팅

```js
if (loginsuccess.success === "admin") {
  setFadeOut(true);
  setUser("admin");
  setUserData(loginsuccess.user_Data)
  sessionStorage.setItem("userRole", "admin");
  sessionStorage.setItem("userData", JSON.stringify(loginsuccess.user_Data));
  setTimeout(() => {
    navigate('/adminPage');
  }, 500);
}
```

- 로그인 성공 여부와 역할에 따라 세션 정보를 저장합니다.
- 이후 관리자 또는 사원 페이지로 이동합니다.
- 관리자 또는 사원
- 세션 정보는 `sessionStorage`를 통해 앱 전체에서 접근 가능하게 유지됩니다.

---

## 요약 테이블

| 항목     | 설명                                        |
|----------|---------------------------------------------|
| 역할 전환 | `framer-motion`으로 관리자/사원 폼 전환 처리  |
| 입력 관리 | switch-case로 역할별 입력 필드 구분 처리      |
| 유효성 검사 | 외부 모듈을 통해 정규식 기반 검사 수행            |
| 로그인 처리 | 역할에 따라 세션 저장 및 라우팅 구분             |
| UX       | 로그인 성공 시 페이드아웃 효과로 사용자 경험 개선 |
