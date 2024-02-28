import instance from "./api.js";

export async function annoncementGetAll() {
  const response = await instance.get(`/annoncement/`, {
    params: {
      limit: "150",
      offset: "0",
      where: "",
    },
  });

  return response.data;
}
