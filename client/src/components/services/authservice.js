import API from "./httpservice";
import Cookies from 'universal-cookie';
import { tokenService } from "./tokenService";
import { Redirect } from "react-router-dom";

const apiEndpint = "users/login";
const cookies = new Cookies();

export async function login(username, password) {
  const result = await API.post(apiEndpint, { username, password });
  console.log(result);
  if (result.data.token) {
    cookies.set('token', result.data.token);
    tokenService.setToken(result.data.token);
  }
  return result;
}

export function logout() {
  cookies.remove('token');
  tokenService.clearToken();
  return true
}

