import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/index.js";
// import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import firebase from "firebase";
import { store } from "./store/index.js";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(Vuetify);

const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
    created() {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      }
    }
  });
  unsubscribe();
});
