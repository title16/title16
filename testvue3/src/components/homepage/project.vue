<template>
    <div id="app">  <br><br>
<div>
<el-row>
    <el-col :span="5">
        <div>
            <i class="el-icon-d-arrow-right"> </i>
        </div>
    </el-col>
    <el-col :span="11">
        <div>
            <h style="font-family:Hiragino Sans GB;font-size:25px"><b>公司招标项目</b></h>
        </div>
     </el-col>
     <el-col :span="8">
        <div>
           <!-- <img src="../../assets/project.png" class="img-responsive"> -->
        </div>
     </el-col>
</el-row >
</div>
<div style="">
    <div style="">
    <el-row>
        <el-col :span="8">
            <p style="font-size:20px;color:white">推荐项目</p>
        </el-col>
        <el-col :span="10">
              <p>&nbsp</p>
        </el-col>
        <el-col :span="6">
            <p style="font-size:20px;color:white">更多项目<i class="el-icon-caret-right"></i></p>
        </el-col>
    </el-row>
    </div>
    <br>
    <el-row :gutter="20">       
    <el-col :xs="24" :sm="10" :md="10" :lg="6" :xl="6" v-for="(o, index) in 6" :key="o" :offset="1" ><!-- 8为项目数组 -->
        <el-card  shadow="hover">
        <img src="../../assets/logo.png" class="image">
        <div style="padding: 40px;">
            <span>项目名：</span>
            <div class="bottom clearfix">
            <el-button type="text" class="button" @click="open">详情</el-button>
            </div>
        </div>
        </el-card>
    </el-col>
    </el-row>
<br><br>
</div>
</div>
</template>
<script>
export default {

    data(){
        return{
             info:null
        }
    },
    methods:{
        open() {
        this.$message({
          message: '您未登录！',
          type: 'warning'
        });
      },

    },

    mounted () {
      axios.get('http://localhost:8081/readers', {      //传
      
    })
    .then(function (response) {
      console.log(response);
      this.info=response;
    })
    .catch(function (error) {
      console.log(error);
    }); 
    }
    
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
