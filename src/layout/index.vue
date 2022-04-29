<template>
  <div class="layout">
    <Menu name="wly"> </Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header/index.vue";
import Content from "./Content/index.vue";
import Menu from "./Menu/index.vue";
</script>

<style lang="less" scoped>
.layout{
  display: flex;
  height: 100%;
  overflow: hidden;
  &-right{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
