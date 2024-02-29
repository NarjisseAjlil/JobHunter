// src/services/website.js

import instance from "./api.js";

export async function annoncementGetAll() {
  //@todo : gestion fine des erreurs
  const response = await instance.get(`/annoncement/`, {
    params: {
      limit: "150",
      offset: "0",
      where: "",
    },
  });

  return response.data;
};
