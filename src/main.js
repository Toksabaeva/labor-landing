import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { store } from "./stores";

import "./assets/main.scss";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { aliases, fa } from "vuetify/iconsets/fa-svg";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas  } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(fas);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});

/*new createApp({
  router,
  store,
  vuetify,
  render: (h) => h(App),
})
  .use(createPinia())
  .$mount("#app");*/
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(ElementPlus);
app.use(router);
app.use(vuetify);
app.use(store);

app.mount("#app");
