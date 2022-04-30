<template>
  <div class="dialog">
    <header>
      <slot name="header" data="header"></slot>
    </header>
    <main>
      <slot data="default"></slot>
    </main>
    <footer>
       <slot name="footer" data="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.dialog {
  header {
    height: 100px;
    background-color: red;
  }
  main {
    height: 100px;
    background-color: green;
  }
  footer {
    height: 100px;
    background-color: yellow;
  }
}
</style>
