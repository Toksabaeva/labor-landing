import { createStore } from "vuex";

import { auth } from "./Auth.module";

export const store = createStore({
  modules: {
    auth,
  },
});
