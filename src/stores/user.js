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
    },
  },
});
