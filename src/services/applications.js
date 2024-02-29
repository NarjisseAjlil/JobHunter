import instance from "./api.js";

export async function newApplicationGetAll(limit = 100) {
  const response = await instance.get(`/newApplication/`, {
    params: {
      limit: limit,
      offset: "0",
      where: "",
    },
  });

  return response.data;
}
