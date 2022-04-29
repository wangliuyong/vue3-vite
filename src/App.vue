<script setup lang="ts">
const msg = ref('wly')

const stop = watchEffect((oninvalidate) => {
  console.log(msg.value);
  
  oninvalidate(() => {
    console.log('清除一些副作用');
    stop()
  })

  const body:HTMLElement | null = document.querySelector('body')

  console.log(body);
},{
   // post组件渲染后执行 pre更新前，sync同步执行
  flush:'post' ,
  onTrigger(){
    console.log('watch被触发了');
  }
})




</script>

<template>
 {{msg.split('')}}

</template>

<style lang="less">

</style>
