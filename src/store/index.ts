import { createStore } from 'vuex'
import getters from '@/store/getters'
import modules from '@/store/modules'
import { App } from 'vue'

export type GlobalDataProps = {
  testName: string
  user?: {
    token: string
    avatar: string
    name: string
    info: any
    roles: any[]
  }
}

const store = createStore<GlobalDataProps>({
  state: {
    testName: 'hello'
  },
  mutations: {
    setTestName(state, name: string) {
      state.testName = name
    }
  },
  actions: {},
  modules,
  getters
})

export function setupStore(app: App) {
  app.use(store)
  console.log(store, 'vuex')
}

export default store
