import { BASE_URL } from "../utils/config";

export const fetchNewsActions = async (keyword = "general", page = 1) => {
  const res = await fetch(`${BASE_URL}/${keyword.toLowerCase()}?page=${page}`, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
  return await res.json();
};
