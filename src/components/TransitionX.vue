<template>
  <div>
    <button @click="showBox = !showBox">单个动画</button>
    <transition
      :duration="300"
      name="fade"
      enter-active-class="animate__animated animate__rubberBand"
      leave-active-class="animate__animated animate__heartBeat"
    >
      <div v-if="showBox" class="box"></div>
    </transition>
  </div>

  <div>
    <h2>transition-group</h2>
    <div>
      <button @click="add">ADD</button>
      <button @click="deletex">DELETE</button>
    </div>
    <div class="wrap">
       <transition-group
      enter-active-class="animate__animated animate__rubberBand"
      leave-active-class="animate__animated animate__backOutDown"
    >
      <div class="item" :key="item" v-for="item in list">{{ item }}</div>
    </transition-group>
    </div>
   
  </div>
</template>

<script setup lang="ts">
const showBox = ref(false);
const list = reactive<number[]>([1, 2, 3, 4, 5]);

const add = () => {
  list.push(list.length + 1);
};
const deletex = () => {
  list.pop();
};
</script>

<style scoped lang="less">
.wrap{
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 30px;
    height: 30px;
    border: 1px solid red;
  }
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}

/* // transition 动画样式 */
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
