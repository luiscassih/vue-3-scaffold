import { createStore } from 'vuex';
export interface State {
  counter: number
}
const state: State = {
  counter: 0
}

const mutations = {
  incrementCounter(state: State) {
    state.counter++
  }
}

export default createStore({state, mutations});