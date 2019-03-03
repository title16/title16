<template>
    <div><br><br><br><br>
    <div class="f1">
         <div><br>
           <el-row >
               <el-col :span="12">
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">
                   <p style="">编号：{{expert_id}}</p>
                   <p style="text-align:left;font-size:15px">姓名：</p>
                   <p style="text-align:left;font-size:15px">用户名：</p>
                   <p style="text-align:left;font-size:15px">密码：</p>
                   <p style="text-align:left;font-size:15px">邮箱：</p>
                   <p style="text-align:left;font-size:15px">手机：</p>
                   <p style="text-align:left;font-size:15px">支付宝账号：</p>
                   <p style="text-align:left;font-size:15px">从业资格证：</p>
                   <p style="text-align:left;font-size:15px">修改：</p>
                   <el-button style="float:left;font-size:1px;margin:0px" @click="turntomodifyexpertinfo" size="mini">修改密码</el-button>
                   <el-button style="float:left;font-size:1px;margin:0px" @click="turntomodifyexpertinfo_tel" size="mini">修改手机</el-button>
                   <el-button style="float:left;font-size:1px;margin:0px" @click="turntomodifyexpertinfo_account" size="mini">修改支付宝</el-button>
               </el-col>
           </el-row>
        </div><hr>
        <div>
             <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                    <p style="text-align:left">平台信息</p>
                    <p style="font-size:18px">所得报酬？？</p>
                    <p style="font-size:18px">仲裁个数？？</p>                  
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
             </el-row>
        </div>
       <br><br><br><br><br>
    </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            expert_id:this.$route.query.expert_id,
            img1:require('../../assets/logo.png'),
            info:null,
            radio: '',
            percentage:"40",

        }
    },
    methods: {
        turntomodifyexpertinfo() {
           this.$router.push({
               path:'/expertafterlogin/modifyexpertinfo',
               query:{
                   expert_id:this.$route.query.expert_id,
               }
           })
           this.$router.go(0);
      },
      turntomodifyexpertinfo_tel(){
          this.$router.push({
               path:'/expertafterlogin/modifyexpertinfo_tel',
               query:{
                   expert_id:this.$route.query.expert_id,
               }
           })
           this.$router.go(0);
      },
      turntomodifyexpertinfo_account(){
          this.$router.push({
               path:'/expertafterlogin/modifyexpertinfo_account',
               query:{
                   expert_id:this.$route.query.expert_id,
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
.f1{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    border-radius:25px 25px 10px 10px;

}
.container{
    font-size:1.4rem;
    }
.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .f1 {
      width: 100%;
      margin: -1rem  0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    .container{
        font-size: 15px;
    }
    }
</style>
