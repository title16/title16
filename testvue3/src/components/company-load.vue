<template>
   <div>
       <img src="../assets/logo.png">
       <p>欢迎登录</p>
       <el-row>
           <el-col :span="8"><div class="grid-content "></div></el-col>
           <el-col :span="8"><div class="grid-content "></div>
           <br>
           <el-form ref="form" :model="Companyload" :rules="rules" status-icon label-width="80px">
                    <el-form-item label="用户名" prop="company_username">
                        <el-input v-model="Companyload.company_username" placeholder="请输入公司账户名称"></el-input>
                    </el-form-item>
                     <el-form-item label="密码" prop="company_code">
                        <el-input v-model="Companyload.company_code" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-row>
                        <el-col :span="8"><div class="grid-content bg-purple">
                        </div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light">
                            <el-button @click="companyLogin" type="primary"> 登录</el-button></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
           </el-form>
           </el-col>
           <el-col :span="8"><div class="grid-content "></div></el-col>
       </el-row>

   <!-- 页尾 -->
   <thefooter></thefooter>     
   </div> 
</template>
<script>
import axios from 'axios'
import thefooter from '../components/footer.vue'

export default {
    name:'company-load',
    data(){
        return{
            Companyload:{
                company_username:'',
                company_code:'',
            },
            //实现验证
             rules:{
                company_username:[
                    {required:true,message:'用户不能为空',trigger:'blur'}
                ],
                company_code:[
                    {required:true,message:'密码不能为空',trigger:'blur'}
                ]
            },
        }
    },
    components:{
      'thefooter':thefooter,
    },
    methods:{
        companyLogin(){
//             axios.post('http://localhost:8081/readers',{
//                 company_username:this.Companyload.company_username,
//                 company_code:this.Companyload.company_code,

//             }).then(res=>{
//                 this.responseResult=JSON.stringify(responseResult.data)
//                 if(res.data.code===200){
//                     this.$router.replace({path: '/index'})
//                 }
//         }).catch(function (error) {
//           alert("账户名或密码错误！"+error)
//         });
            this.$router.push({
                path:'/companyafterlogin',
                query:{
                     company_id:this.Companyload.company_username,//目前以company_username作为id
                     company_code:this.Companyload.company_code,
                }
            });
            this.$router.go(0); 
        },


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
.el-input-295px{
  width:295px
}
.el-row {
    margin-bottom: 20px;
  }
.el-row:last-child {
    margin-bottom: 0;
}  
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
