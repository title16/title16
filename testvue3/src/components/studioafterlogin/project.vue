<template>
    <div id="app">  <br><br>
<div>
<el-row>
    
</el-row>
</div>
<div style="background-color:rgba(255,255,255,1)"><br>
    <div style="">
    <el-row>
        <el-col :span="8">
            <p style="font-size:20px;color:white">推荐项目</p>
        </el-col>
        <el-col :span="9">
              <p>&nbsp</p>
        </el-col>
        <el-col :span="7">
            <p style="font-size:20px;color:white">更多项目<i class="el-icon-caret-right"></i></p>
        </el-col>
    </el-row>
    </div>
    <br>
    <div style="" class="studioproject">
    <el-row :gutter="0">
    <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="(item, index) in projects" :key="item" :offset="0" > 
        <el-card  shadow="hover" class="card" @click="todetails(index)">
        <img src="../../assets/logo.png" class="image" @click="todetails(index)"><br>
        <div style="padding: 40px;background-color:rgba(220,220,220,0.2);border-radius:50px;height:120px" class="fontunderimage">
            <span>编号：{{item.id}}</span><br>
            <el-button type="text" class="button" @click="todetails(index)">{{item.name}}</el-button>
        </div>
        </el-card>
    </el-col>
    </el-row>
    </div>
<br><br>
</div>
 
</div>
</template>
<script>
export default {
    name:'first',
   data(){
       return{
           projects:[
               {
                   id:1,
                   name:'xiangmu1'
               },
                {
                   id:2,
                   name:'xiangmu'
               },
               {
                   id:3,
                   name:'xiangmu1'
               },
                {
                   id:4,
                   name:'xiangmu'
               },
               {
                   id:5,
                   name:'xiangmu1'
               },
                {
                   id:6,
                   name:'xiangmu333'
               },
           ],
           info:null
       }
   },
   methods:{
       todetails:function(index){
           this.$router.push({
                path:'/studioafterlogin/projectdetail',
                query:{
                     studio_id:this.$route.query.studio_id,               
                     project_id:this.projects[index].id
                }
            });
            
       }
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
.el-button{
    float:center
}
.card{
    border-radius:25px 25px 25px 25px;
    width:80%;
    margin-top:10px;
}
.studioproject{
    margin-left:5rem;
    margin-right:5rem;
}

.fontunderimage{
    border-width: 5px;
    -webkit-box-shadow: #FFFACD 2px 2px 2px;
    /* box-shadow: #666 0px 0px 10px; */
    
}
.fontunderimage:hover{
    border-width: 5px;
    -webkit-box-shadow: #FFFACD 2px 2px 5px;
    box-shadow: #666 0px 0px 2px;
    
}
 @media(max-width: 960px) {
   .card{
    border-radius:25px 25px 25px 25px;
    width:100%;
    }
    .studioproject{
        margin-left:0rem;
        margin-right:0rem;
    }
}
</style>
