<template>
  <el-input v-model="input" placeholder="Please input" />
</template>

<script>
import { UseWheatherStore } from '@/stores/stores'

export default {
  name: 'SearchComponent',
  data() {
    return {
      input: ''
    }
  },
  watch: {
    input() {
      let input = this.input
      UseWheatherStore().setSearchInput(input)
    }
  }
}
</script>
