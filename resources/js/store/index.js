import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

const opts={
    state:{
        lakim:"test"
    },
    mutations:{},
    actions:{},
    getters:{},
}

export default new Vuex.Store(opts)
