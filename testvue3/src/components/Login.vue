<template>
<div style="background-color:white">  <br><br>  <br>
     <el-tabs v-model="activeName" >
        <el-tab-pane label="公司登录" name="first"><companyLogin></companyLogin></el-tab-pane>
        <el-tab-pane label="工作室登录" name="second"><studioLogin></studioLogin></el-tab-pane>
        <el-tab-pane label="专家登录" name="third"><expertLogin></expertLogin></el-tab-pane>
        <el-tab-pane label="管理员登录" name="fourth"><managerLogin></managerLogin></el-tab-pane>
      </el-tabs>
</div>
</template>
<script>
import axios from 'axios'
import companyLogin from '../components/company-load.vue'
import studioLogin from '../components/studio-login.vue'
import expertLogin from '../components/expert-login.vue'
import managerLogin from '../components/manager-login.vue'

export default {
    name:'login',
    data(){
        return{
            activeName: 'first'
        }
    },
    methods:{

    },
    components:{
        'companyLogin':companyLogin,
        'studioLogin':studioLogin,
        'expertLogin':expertLogin,
        'managerLogin':managerLogin
    }
}
</script>
<style>
  /* .item {
    padding: 40px 40px 40px 40px;
    position: relative;
    overflow: hidden;
  } */
   /* @media (max-width: 960px) {
    .item{
      top: 50%;
      left: 0;
      width: 100%;
      margin-left: 0;

    }
   } */
</style>
