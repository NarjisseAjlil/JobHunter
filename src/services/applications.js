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
  async create(title, url, duration, salary, firmName, city) {
    const response = await instance.post(`/newApplication/`, {
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

const newApplicationInstance = new Application();

export default newApplicationInstance;
