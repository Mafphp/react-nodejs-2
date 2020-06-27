import API from "./httpservice";

const apiEndpint = "vehicles/category";

export function getprice(category) {
  return API.post(apiEndpint, { category });
}
