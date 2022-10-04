export function inputValidate(value, length) {
  if (value.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}
export function emailValidate(email) {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValid = regEx.test(email);
  return emailValid;
}
export function phoneValidate(phone) {
  var regEx = /^\d{8}$/;
  const phoneValid = regEx.test(phone);
  return phoneValid;
}
