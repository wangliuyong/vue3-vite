<template>

  <div class="content">
    <TransitionX></TransitionX>
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

    <Dialog>
      <template #[slotName]="data"> slotName{{ data }} </template>
      <!-- <template #header="data"> header{{data}} </template>
      <template #default="data"> header{{data}} </template>
      <template #footer="data"> footer{{data}} </template> -->
    </Dialog>
    
    <!-- 异步组件 -->
    <Suspense>
      <template #fallback> loading..... </template>
      <template #default>
        <AsyncComponent></AsyncComponent>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { Tab, Com } from "@/models/menu";
import A from "@/components/A.vue";
import B from "@/components/B.vue";
import Dialog from "@/components/Dialog/index.vue";
import TransitionX from "@/components/TransitionX.vue";
import Login from "@/components/Login.vue";
// import AsyncComponent from "@/components/AsyncComponent.vue";

// 异步组件引入方式
const AsyncComponent = defineAsyncComponent(
  () => import("@/components/AsyncComponent.vue")
);
// 动态组件
const data = reactive<Tab[]>([
  { name: "header", comName: markRaw(A) }, // 标记不做代理，无响应式
  { name: "footer", comName: markRaw(B) }, // 标记不做代理，无响应式
]);

const currentComponent = reactive<Com>({
  comName: data[0].comName,
});

const slotName = ref("footer");

const changeCom = (item: Tab) => {
  currentComponent.comName = item.comName;
  slotName.value = item.name;
};
</script>
<style lang="less" scoped>
.content {
  flex: 1;
  margin: 20px;
  overflow: auto;
}
</style>
