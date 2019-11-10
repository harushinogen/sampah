import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [{
      title: "Data Waiting To Be Fetched",
      img: "img/863589.png",
      url: "#"
    }]
  },
  mutations: {
    loadEvents (state) {
      Axios.get('/test.json')
        .then(response => {
          state.events = response.data
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  actions: {
    loadEvents (context) {
      context.commit('loadEvents');
    }
  },
  modules: {
  }
})
