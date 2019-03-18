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
            <h style="font-family:Hiragino Sans GB;font-size:25px"><b>工作室店铺</b></h>
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
            <span>工作室名：</span>
            <div class="bottom clearfix">
            <el-button type="text" class="button" @click="open">详情</el-button>
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
            info:null
        }
    },
    methods: {
      turntostudio:function(){
           this.$router.push('/searchstudio');
           this.$router.go(0);
      },
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
