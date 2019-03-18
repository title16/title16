<template>
    <div><br><br><br><br>
    <div class="biddingstudiodetail">
         <div><br>
           <el-row >
               <el-col :span="12">
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">   
                   <el-button type="warning" style="float:right;margin-right:0.5rem" @click="turntobid"> 选择该工作室</el-button>       
                   <p style="">工作室基本信息</p>
                   <p style="text-align:left;font-size:15px">账号：</p>
                   <p style="text-align:left;font-size:15px">工作室编号：{{biddingstudio_id}}</p>
                   <p style="text-align:left;font-size:15px">工作室名</p>
                   <p style="text-align:left;font-size:15px">城市：</p>
                   <p style="text-align:left;font-size:15px">联系方式：</p>
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
                  <p style="font-size:15px">项目经历</p>
                  <el-row>
                        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in endedprojects" :key="o" :offset="0" >        
                            <el-card  shadow="hover">
                                <el-row>
                                    <el-col :span="12">
                                        <img src="../../assets/logo.png" class="image">
                                    </el-col>
                                    <el-col :span="12">
                                        <div style="padding: 14px;">
                                            <span>项目编号：{{item.id}}</span><br>
                                            <span>项目名：{{item.name}}</span><br>
                                            <div class="bottom clearfix">
                                            <el-button type="text" class="button" @click="">详情</el-button>
                                            </div>       
                                        </div>   
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
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
            biddingstudio_id:this.$route.query.biddingstudio_id,
            img1:require('../../assets/logo.png'),
            mark:4.5,
            info:null,
            endedprojects:[
                {
                    id:21,
                    name:'xiangmu1'
                },
                {
                    id:22,
                    name:'xiangmu1'
                },
                {
                    id:23,
                    name:'xiangmu1'
                },
                {
                    id:24,
                    name:'xiangmu1'
                },
                {
                    id:25,
                    name:'xiangmu1'
                }
            ]
        }
    },
    components:{
        ended:ended
    },
    methods: {
        turntobid(){
             this.$router.push({
            path:'/companyafterlogin/tobid',
            query:{
                 biddingstudio_id:this.$route.query.biddingstudio_id,
                 company_id:this.$route.query.company_id,
                 biddingproject_id:this.$route.query.biddingproject_id,
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
.biddingstudiodetail{
   
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
    .biddingstudiodetail {
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
