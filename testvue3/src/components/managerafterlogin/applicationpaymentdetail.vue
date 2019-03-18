<template>
    <div>
    <div class="applicationpaymentdetail">
         <div>
           <el-row >
               <el-col :span="12"><br>
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">
                   <p style="">项目编号：{{applicationproject_id}}</p>
                   <p style="text-align:left;font-size:15px">项目名：</p>
                   <p style="text-align:left;font-size:15px">公司编号：</p>
                   <p style="text-align:left;font-size:15px">公司名：</p>
                   <p style="text-align:left;font-size:15px">公司编号：</p>
                   <p style="text-align:left;font-size:15px">公司名：</p>
               </el-col>            
           </el-row>
        </div><hr>
        <div class="expression">
             <el-row>
                 <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                 <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                     <p>申请款种类</p>
                     <p style="font-size:16px;text-align:center">第几进度款/首款/尾款</p>
                     <el-button style="float:right;font-size:15px" size="mini">查看进度记录</el-button><br>
                     <hr>
                     <p>金额数目</p>
                     <p style="font-size:16px;text-align:center">￥？？</p>
                     <p style="font-size:16px;text-align:center">公司已经/还未上缴</p>
                     <br>
                     <el-button type="warning" style="float:right;margin-right:1rem">支付</el-button>
                     
                 </el-col>
                 <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
             </el-row>
        </div>
        <br><br>
    </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            applicationproject_id:this.$route.query.applicationproject_id,
            img1:require('../../assets/logo.png'),
            info:null,

        }
    },
    methods: {
       
    },
    
   mounted() {   
    axios.post('http://localhost:8081/readers', {      
    applicationproject_id:this.$route.query.applicationproject_id
      
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
.applicationpaymentdetail{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:0.5rem;
    text-align: center;
    background-color: white;
    border-radius:25px 25px 10px 10px;
}
.expression{
     font-size:1.5rem;
      text-align: left;
}
.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .applicationpaymentdetail {
      width: 100%;
      margin: 0.3rem 0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
</style>
