// store.js
import { defineStore } from "pinia";
import { useDemoStore } from "./demo";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "main",
  // state: 返回对象的函数
  state: () => ({
    count: 1,
  }),
  getters: {
    getCount(state) {
      return state.count + 1;
    },
    getDemo() {
      const demoStore = useDemoStore();
      return demoStore.count;
    },
  },
  actions: {
    setCount(count: number) {
      this.count = count;
    },
    reset(){
      this.$reset()
    }
  },
});
