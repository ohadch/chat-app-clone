import Vue from 'vue'
import Vuex from 'vuex'

import user from "./modules/user.module";
import conversation from "./modules/conversation.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    conversation
  }
})
