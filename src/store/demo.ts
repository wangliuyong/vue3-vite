import { defineStore } from "pinia";

export const useDemoStore = defineStore({
  id: "demo",
  state: ()=> ({
    count: 5
  }),
});