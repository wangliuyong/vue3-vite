<template>
  <div class="header">
    <span>登录实现</span>
    <span>登录状态:{{ isLogin ? "已登陆" : "未登录" }}</span>
    <span>
      <button @click="login">登陆</button>
      <button @click="logout">退出</button>
    </span>
  </div>
</template>
<script setup lang="ts">
import { useUser } from "@/hooks/useUser";

const { login, logout, isLogin } = useUser();
</script>
<style lang="less" scoped>
.header {
  height: 40px;
  border-bottom: 1px solid #ccc;
}
</style>