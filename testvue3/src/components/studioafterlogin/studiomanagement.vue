<template>
    <div><br><br><br><br>
    <div class="f">
         <div><br>
           <el-row >
               <el-col :span="12">
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">          
                   <p style="">基本信息</p>
                   <p style="text-align:left;font-size:15px">账号：{{studio_id}}</p>
                   <p style="text-align:left;font-size:15px">工作室编号：</p>
                   <p style="text-align:left;font-size:15px">工作室名</p>
                   <p style="text-align:left;font-size:15px">城市：</p>
                   <p style="text-align:left;font-size:15px">联系方式：</p>
                   <el-button style="float:right;margin-right:20px" @click="turntostudiomember">管理成员</el-button>
               </el-col>
           </el-row>
        </div><br><hr>
        <div>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                  <p style="text-align:left;">平台信息</p>
                  <p style="font-size:15px">综合评价</p>
                  <el-rate
                    v-model="mark"
                    disabled
                    show-score
                    text-color="#ff9900">
                  </el-rate><br>
                  
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
            </el-row>
        </div>
        <br><hr>
    </div>
    </div>
</template>
<script>
import ended from '../studioafterlogin/ended.vue'
export default {
    
    data(){
        return{
            studio_id:this.$route.query.studio_id,
            img1:require('../../assets/logo.png'),
            mark:4.5,
            info:null,
        }
    },
    components:{
        ended:ended
    },
    methods: {
        turntostudiomember:function(){
          this.$router.push({
            path:'/studioafterlogin/studiomember',
            query:{
                 studio_id:this.$route.query.studio_id
            }
          })
           this.$router.go(0);
        }
              
    },
    
   mounted() {   
    axios.get('http://localhost:8081/readers', {      

      
    })
    .then(function (response) {
      console.log(response);
      this.info=response;
    })
    .catch(function (error) {
      console.log(error);
    }); 
       
   },
}
</script>
<style>
.f{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    border-radius:25px 25px 10px 10px;
}
.g{
    font-size:1.2rem;
    background-color: white;
}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .f {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
</style>
