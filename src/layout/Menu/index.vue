<template>
  <div class="menu" @click="onClick">{{ name }}</div>
</template>
<script setup lang="ts">

type Props = {
  name: string;
};


// const props = defineProps<Props>();
const props  = withDefaults(defineProps<Props>(),{
  name:'demo'
})

const emits = defineEmits(["on-click"]);



const onClick = () => {
  emits("on-click");
};

defineExpose({props})

</script>
<style lang="less" scoped>
.menu {
  width: 240px;
  border-right: 1px solid #ccc;
}
</style>
