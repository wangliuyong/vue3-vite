<template>
  <div class="menu" @click="onClick">
    <MenuItem v-for="item in menuLitem" :item="item"></MenuItem>
  </div>
</template>
<script setup lang="ts">
import { Menu } from "../../models/menu";
import MenuItem from "../../components/MenuLtem/index.vue";

type Props = {
  name: string;
};

const menuLitem:Menu[] = [
  {
    name: "1-1",
    children: [{ name: "1-1-1" }],
  },
  {
    name: "1-2",
    children: [{ name: "1-2-1" }],
  },
  {
    name: "1-3",
    children: [{ name: "1-3-1" }],
  },
];

// const props = defineProps<Props>();
const props = withDefaults(defineProps<Props>(), {
  name: "demo",
});

const emits = defineEmits(["on-click"]);

const onClick = () => {
  emits("on-click");
};

defineExpose({ props });
</script>
<style lang="less" scoped>
.menu {
  width: 240px;
  border-right: 1px solid #ccc;
}
</style>
