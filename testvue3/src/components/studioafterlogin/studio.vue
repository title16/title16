<template>
    <div id="studio">  <br><br>  
<div>
    
<el-row>
    <el-col :span="5">
        <div>
           <!-- <img src="../../assets/studio.png" width="60%"> -->
        </div>
    </el-col>
    <el-col :span="11">
        <div>
          <br>
        </div>
     </el-col>
     <el-col :span="8">
        <div>
            <i class="el-icon-d-arrow-left"></i>
        </div>
     </el-col>
</el-row>
 </div>
<div style="">
    <el-row>
        <el-col :span="8">
            <p style="font-size:20px;color:white">推荐工作室</p>
        </el-col>
        <el-col :span="9">
              <p>&nbsp</p>
        </el-col>
        <el-col :span="7">
           <el-button type="primary" @click="turntostudio">更多工作室</el-button><i class="el-icon-caret-right"></i>
        </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
    <el-col :xs="24" :sm="10" :md="10" :lg="6" :xl="6" v-for="(o, index) in 6" :key="o" :offset="1" > 
        <el-card  shadow="hover">
        <img src="../../assets/logo.png" class="image">
        <div style="padding: 40px;">
            <span>工作室名：{{o.id}}</span>
            <div class="bottom clearfix">
            <el-button type="text" class="button">详情</el-button>
            </div>
        </div>
        </el-card>
    </el-col>
    </el-row>
<br><br>
   <!-- <router-view></router-view> -->
</div>
<br>
</div>
</template>
<script>
export default {
    
   data(){
       return{
           studio:[
               {
                   id:1,
                   
               },
                {
                   id:2,
                   
               },
           ],
           studios:null
       }
   },

    methods: {
      turntostudio:function(){
           this.$router.push('/searchstudio');
           this.$router.go(0);
      }
    },
    mounted () {
      axios.get('http://localhost:8081/readers', {      //传
      
    })
    .then(function (response) {
      console.log(response);
      this.studios=response;
    })
    .catch(function (error) {
      console.log(error);
    }); 
    }
}
</script>
<style>
#studio {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
