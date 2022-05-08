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
      enter-active-class="animate__animated animate__backInUp"
      leave-active-class="animate__animated animate__backOutDown"
    >
      <div class="item" :key="item" v-for="item in list">{{ item }}</div>
    </transition-group>
    </div>

    <div>
      <button @click="random">random</button>
      <div class="wraps" @click="random">
         <transition-group
           move-class="move"
          >
            <div class="items" :key="item" v-for="item in lists">{{ item }}</div>
          </transition-group>
      </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
const showBox = ref(false);
const list = reactive<number[]>([1, 2, 3, 4, 5]);

const lists = ref(Array.apply(null,({length:81} as any)).map((item,index) => index))



const add = () => {
  list.push(list.length + 1);
};
const deletex = () => {
  list.pop();
};

const random = ()=>{
  lists.value = _.shuffle(lists.value)
}
</script>

<style scoped lang="less">

.wraps{
  display: flex;
  flex-wrap: wrap;
  width: calc(30px * 9 + 18px);
  .items{
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
  }
}
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

.move{
  transition: all 1s;
}
</style>
