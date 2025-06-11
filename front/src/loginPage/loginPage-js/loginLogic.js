const idRegex = /^[a-zA-Z0-9]{4,15}$/;
const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,16}$/;

export function validateLogin(id, pw) {
  return idRegex.test(id) && pwRegex.test(pw);
}