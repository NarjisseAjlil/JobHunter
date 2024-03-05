// src/services/user.js

import instance from "./api.js";

class User {
  async exists(email) {
    const response = await instance.get(`/user/`, {
      params: {
        where: `(email,eq,${email})`,
      },
    });
    return response.data;
  }
  async login(email, password) {
    const response = await instance.get(`/user/`, {
      params: {
        where: `(email,eq,${email})~and(password,eq,${password})`,
      },
    });
    return response.data;
  }

  async create(email, password, name,cv,coverLetter) {
    const response = await instance.post(`/user/`, {
      email: email,
      password: password,
      name: name,
      cv: cv,
      coverLetter: coverLetter,
    });
    return response.data;
  }


  async update(userId, newCvCoverLetter) {
    const url = `${userId}/test/`;
    console.log('Update URL:', url);
  
    const response = await instance.post(url, {
      cvCoverLetter: newCvCoverLetter,
    });
  
    return response.data;
  }
  
  
}

const userInstance = new User();
export default userInstance;
