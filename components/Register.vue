<template>
      <el-tabs v-model="activeName" >
        <el-tab-pane label="公司注册" name="first"><companyRegister></companyRegister></el-tab-pane>
        <el-tab-pane label="工作室注册" name="second"><studioRegister></studioRegister></el-tab-pane>
        <el-tab-pane label="专家注册" name="third"><expertRegister></expertRegister></el-tab-pane>
      </el-tabs>
</template>
<script>
import companyRegister from '../components/company-register'
import studioRegister from '../components/studio-register'
import expertRegister from '../components/expert-register'
import axios from '../components/axios'
export default {
    name:'register',
    data(){
         return{
              activeName: 'second'
         }
    },
    methods: {
        
    },
    components:{
     'companyRegister':companyRegister,
     'studioRegister':studioRegister,
     'expertRegister':expertRegister,
     'axios':axios,
    },
}
</script>
<style>

</style>