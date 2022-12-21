import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { store } from "./stores";

import "./assets/main.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

/*new createApp({
  router,
  store,
  vuetify,
  render: (h) => h(App),
})
  .use(createPinia())
  .$mount("#app");*/
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(store);

app.mount("#app");
