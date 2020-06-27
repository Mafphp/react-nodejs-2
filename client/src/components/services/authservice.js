import API from "./httpservice";

const apiEndpint = "users";

export function login(username, password) {
  return API.post(apiEndpint, { username, password });
}
