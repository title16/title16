<template>
   <div id="app">
       <img src="../assets/logo.png">
       <p>欢迎登录</p>
       <el-row>
           <el-col :span="8"><div class="grid-content "></div></el-col>
           <el-col :span="8"><div class="grid-content "></div>
           <br>
           <el-form ref="form" :model="expertlogin" :rules="rules" status-icon label-width="80px">
                    <el-form-item label="用户名" prop="expert_username">
                        <el-input v-model="expertlogin.expert_username" placeholder="请输入您的账户名称"></el-input>
                    </el-form-item>
                     <el-form-item label="密码" prop="expert_code">
                        <el-input v-model="expertlogin.expert_code" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-row>
                        <el-col :span="8"><div class="grid-content bg-purple">
                        </div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light">
                            <el-button @click="expertLogin" type="primary"> 登录</el-button></div></el-col>
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
    name:'expert-login',
    data(){
        return{
            expertlogin:{
                expert_username:'',
                expert_code:'',
            },
            //实现验证
            rules:{
                expert_username:[
                    {required:true,message:'用户不能为空',trigger:'blur'}
                ],
                expert_code:[
                    {required:true,message:'密码不能为空',trigger:'blur'}
                ]
            },
        }
    },
    components:{
      'thefooter':thefooter,
    },
    methods:{
        expertLogin(){
            axios.post('http://localhost:8081/readers',{
                expert_username:this.expertlogin.expert_username,
                expert_code:this.expertlogin.expert_code,

            }).then(res=>{
                this.responseResult=JSON.stringify(responseResult.data)
                if(res.data.code===200){
                    this.$router.replace({path: '/index'})
                }
        }).catch(function (error) {
          alert("账户名或密码错误！"+error)
        });
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
  margin-top: 60px;
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
