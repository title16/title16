<template>
     <el-tabs v-model="activeName" >
        <el-tab-pane label="公司登录" name="first"><companyLogin></companyLogin></el-tab-pane>
        <el-tab-pane label="工作室登录" name="second"><studioLogin></studioLogin></el-tab-pane>
        <el-tab-pane label="专家登录" name="third"><expertLogin></expertLogin></el-tab-pane>
      </el-tabs>
</template>
<script>
import axios from 'axios'
import companyLogin from '../components/company-load.vue'
import studioLogin from '../components/studio-login.vue'
import expertLogin from '../components/expert-login.vue'

export default {
    name:'login',
    data(){
        return{
            activeName: 'second'
        }
    },
    methods:{

    },
    components:{
        'companyLogin':companyLogin,
        'studioLogin':studioLogin,
        'expertLogin':expertLogin,
    }
}
</script>
<style>

</style>
