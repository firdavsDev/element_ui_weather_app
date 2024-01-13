<template>
    <header>
        <h1 class="title">

            <!-- logo  -->
            <el-icon class="logo">
                <Cloudy />
            </el-icon>
            <!-- title  -->
            vWeather | Vue3 Weather App
            <span class="subTitle">
                <span class="subTitleSpan">
                    {{ country }}
                </span>
            </span>
        </h1>
    </header>
</template>

<script>

import { UseWheatherStore } from '@/stores/stores'

export default {
    name: 'HeaderComponent',
    computed: {
        country() {
            return UseWheatherStore().get_country
        }
    }


}
</script>
<style scoped>
.logo {
    font-size: 70px;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
        font-size: 70px;
    }

    .subTitle {
        font-size: 12px;
        font-weight: 300;
        width: 50%;
        margin-top: 10px;
        text-align: center;
        line-height: 0.1em;
        border-bottom: 1px solid black;
    }

    .subTitleSpan {
        padding: 0 10px;
        background: white;
    }

}
</style>