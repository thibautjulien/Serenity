import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function getMembers(roleIds = []) {
  const response = await API.get("/members", {
    params: roleIds.length ? { roleIds: roleIds.join(",") } : {},
  });

  return response.data;
}
