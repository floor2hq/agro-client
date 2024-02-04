export default function IsAuth() {
  let token = sessionStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}
