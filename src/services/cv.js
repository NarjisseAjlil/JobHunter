// src/services/cv.js

import instance from "./api.js";

class CV {

  async create(cv, coverLetter, userId) {
    const response = await instance.post(`/cv/`, {
      cv: cv,
      coverLetter: coverLetter,
      userId: userId,  
    });
    return response.data;
  }
}

const cvInstance = new CV();
export default cvInstance;
