import { createStore } from 'vuex'
import getters from "@/store/getters";
import {App} from "vue";

const allModules = import.meta.globEager('./modules/*.ts')
const modules = {}
Object.keys(allModules).forEach(path => {
  const fileName = path.replace(/(.*\/)*([^.]+).*/ig,"$2")
  modules[fileName] = allModules[path].default
})

const store = createStore({
  state: {
    testName: 'hello'
  },
  mutations: {
    setTestName(state, name) {
      state.testName = name
    }
  },
  actions: {
  },
  modules,
  getters
})

export function setupStore (app: App) {
  app.use(store)
  console.log(store, 'vuex')
}

export default store
