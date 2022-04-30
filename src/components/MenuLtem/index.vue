<template>
  <div class="menu-item">
    {{ item.name }}
    <MenuItem v-for="itemx in item?.children" :item="itemx"></MenuItem>
  </div>
</template>

<script setup lang="ts">
import MenuItem from "./index.vue";
import { Menu } from "../../models/menu";

defineProps<{ item: Menu }>();


</script>




<style scoped lang="less">
.menu-item{
  margin-left: 20px;
  
}
</style>
