import { createStore } from "vuex";
import getters from "./getters";

import { auth } from "./Auth.module";
import { app } from "./App.module";

export const store = createStore({
  modules: {
    auth,
    app,
  },
  getters,
});
