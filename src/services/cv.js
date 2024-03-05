// src/services/cv.js

import instance from "./api.js";

class CV {

  async create(cv, coverLetter, user_id) {
    const response = await instance.post(`/cv/`, {
      cv: cv,
      coverLetter: coverLetter,
      user_id,
    });
    return response.data;
  }
}

const cvInstance = new CV();
export default cvInstance;
