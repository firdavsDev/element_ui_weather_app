<template>
  <el-container class="root"></el-container>
  <!-- top bar  -->
  <!-- theme swtich  -->
  <!-- language toggle -->

  <!-- header  -->
  <HeaderComponent />
  <!-- search -->
  <el-card class="paper">
    <div class="input">
      <el-input v-model="input" placeholder="Please input" :required="true" />
      <el-divider direction="vertical" />
      <el-button type="primary" @click="setSearchInput">Get Info</el-button>
    </div>
    <div class="date">
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
      <el-divider direction="vertical" />
      <el-button type="primary" @click="setToday">Today</el-button>
    </div>
  </el-card>
  <!-- weather info -->
  <!-- wrap text for dont get out of the box  -->
  <pre
    style="
      margin: 20px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      white-space: pre-wrap;
    "
  >
        {{ getWeatherData }}
    </pre
  >
</template>

<script>
//components
import HeaderComponent from '@/components/Header.vue'
//call store action
import { UseWheatherStore } from '@/stores/stores'
export default {
  name: 'HomeView',
  components: {
    HeaderComponent
  },
  data() {
    return {
      input: '',
      date: ''
    }
  },
  computed: {
    //after set input value to store, fetch data from store
    getWeatherData() {
      return UseWheatherStore().get_weather_data
    }
  },
  methods: {
    //set input value to store
    setSearchInput() {
      UseWheatherStore().set_country(this.input)
      UseWheatherStore().fetchWeatherData()
    },
    setToday() {
      //use current date to set date and update daterange picker
      const today = new Date()
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      this.date = [yesterday, today]
      return this.date
    }
  }
}
</script>
<style scoped>
:root {
  font-family: 'Times New Roman', Times, serif;
}

.paper {
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .input {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .date {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
