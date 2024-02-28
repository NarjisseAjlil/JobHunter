// src/services/website.js

import instance from "./api.js";

export async function websiteGetAll() {
  //@todo : gestion fine des erreurs
  const response = await instance.get(`/website/`, {
    params: {
      limit: "150",
      offset: "0",
      where: "",
    },
  });

  return response.data;
}
