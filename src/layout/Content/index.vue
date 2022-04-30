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
    <transition name="fade" enter-active-class="animate__animated animate__rubberBand" leave-active-class="animate__animated animate__heartBeat">
      <component :is="currentComponent.comName"></component>
    </transition>

    <Dialog>
      <template #[slotName]="data"> slotName{{ data }} </template>
      <!-- <template #header="data"> header{{data}} </template>
      <template #default="data"> header{{data}} </template>
      <template #footer="data"> footer{{data}} </template> -->
    </Dialog>
    <Suspense>
      <template #fallback> loading..... </template>
      <template #default>
        <AsyncComponent></AsyncComponent>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { Tab, Com } from "../../models/menu";
import A from "@/components/A.vue";
import B from "@/components/B.vue";
import Dialog from "@/components/Dialog/index.vue";
// import AsyncComponent from "@/components/AsyncComponent.vue";

// 异步组件引入方式
const AsyncComponent = defineAsyncComponent(
  () => import("@/components/AsyncComponent.vue")
);

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
}

// transition 动画样式
.fade-enter-from {
  width: 0;
  height: 0;
}

.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-to {
  height: 50px;
  width: 50vw;
}

.fade-leave-from {
  width: 0;
  height: 0;
}

.fade-leave-active {
  transition: all 1.5s ease;
}

.fade-leave-to {
  height: 50px;
  width: 50vw;
}
</style>
