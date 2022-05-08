import { defineStore } from "pinia";

export const useDemoStore = defineStore({
  id: "otherState",
  state: ()=> ({
    count: 5
  }),
});