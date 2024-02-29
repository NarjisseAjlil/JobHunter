// src/services/form.js

import instance from "./api.js";

class Form{

  async create(title,url,salary,firmName,city,logo) {
    const response = await instance.post(`/annoncement/`, {
      title: title,
      url: url,
      salary: salary,
      firmName: firmName,
      city: city,
    //   categories: categories,
      logo: logo,
    });
    return response.data;
  }
}

const formInstance = new Form();
export default formInstance;