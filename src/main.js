import { createApp, provide, h } from "vue";
import "./style.css";
import App from "./App.vue";
import { apolloClient } from "./ApolloClient";
import { DefaultApolloClient } from "@vue/apollo-composable";

createApp(App).provide(DefaultApolloClient, apolloClient).mount("#app");
