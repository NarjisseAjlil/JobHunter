// src/views/application.js

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

class Application {
  async create(title, duration, statut, img, firmName, city, category) {
    console.clear();
    console.log(title, duration, statut, img, firmName, city, category);

    const response = await instance.post(`/newApplication/`, {
      title: title,
      duration: duration,
      statut: statut,
      img: img,
      firmName: firmName,
      city: city,
      category: category,
    });
    return response.data;
  }
}

const newApplicationInstance = new Application();

export default newApplicationInstance;
