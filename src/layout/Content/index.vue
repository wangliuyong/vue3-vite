<template>
  <div class="content">
    <div class="content-btn-wrap">
      <button
        :key="index"
        v-for="(item, index) in data"
        @click="changeCom(item)"
      >
        {{ item.name }}
      </button>
    </div>
    <component :is="currentComponent.comName"></component>
  </div>
</template>
<script setup lang="ts">
import { Tab, Com } from "../../models/menu";
import A from "../../components/A.vue";
import B from "../../components/B.vue";

const data = reactive<Tab[]>([
  { name: "tabA", comName: markRaw(A) }, // 标记不做代理，无响应式
  { name: "tabB", comName: markRaw(B) }, // 标记不做代理，无响应式
]);

const currentComponent = reactive<Com>({
  comName: data[0].comName,
});

const changeCom = (item: Tab) => {
  currentComponent.comName = item.comName;
};
</script>
<style lang="less" scoped>
.content {
  flex: 1;
  margin: 20px;
}
</style>
