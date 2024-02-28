// src/services/website.js

import instance from "./api.js";

class Annoncement{

  async create(title, url, duration, salary ,firmName, city) {
    const response = await instance.post(`/annoncement/`, {
      title: title,
      url: url,
      duration: duration,
      salary: salary,
      firmName: firmName,
      city: city,
    });
    return response.data;
  }
}

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
}
const annoncementInstance = new Annoncement();

export default annoncementInstance;
