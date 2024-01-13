<script>
import BaseLoading from './components/BaseLoading.vue'
export default {
  name: 'App',
  components: {
    BaseLoading
  }
}
</script>

<template>
  <router-view></router-view>
  <BaseLoading />
</template>

<style scoped></style>
