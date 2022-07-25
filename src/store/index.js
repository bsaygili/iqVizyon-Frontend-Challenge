import { createStore } from "vuex";

export default createStore({
  state: {
    machinesPano: [],
  },
  getters: {},
  mutations: {
    addToMachinePano(state, selectedMachine) {
      state.machinesPano.push(selectedMachine);
      // console.log("state.machinePanoADD:", state.machinesPano);
    },
    removeFromMachinePano(state, id) {
      state.machinesPano = state.machinesPano.filter((item) => item.id != id);
      // console.log("state.machinePanoFILTER", state.machinesPano);
    },
  },
  actions: {},
  modules: {},
});
