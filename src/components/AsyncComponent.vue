<template>
  {{nameList}}
</template>

<script setup lang="ts">
import {axios} from '../untils/server'

const nameList = await axios('../../public/data.json')

console.log(nameList);


</script>



<style scoped>

</style>
