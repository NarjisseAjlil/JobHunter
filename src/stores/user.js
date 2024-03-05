//  src/stores/user.js

import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  //  définir des "états"

  state: () => ({ user: null }),

  //  accesseur (getter)

  getters: {
    getUser() {
      return this.user;
    },
  },

  // mutateur (setter)
  actions: {
    setUser(user) {
      this.user = user;
      sessionStorage.setItem('user', JSON.stringify(user));
    },

    loadUserFromSession() {
      const user = sessionStorage.getItem('user');
      if (user) {
        this.user = JSON.parse(user);
      }
    },
  },
});