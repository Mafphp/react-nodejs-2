import API from "./httpservice";

const apiEndpint = "reservations/updating";
const date = Date();
export async function updateStatus() {
  const result = await API.put(apiEndpint, { date });
  console.log(result);
}
