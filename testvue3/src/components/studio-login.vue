<template>
   <div id="app">
       <img src="../assets/logo.png">
       <p>欢迎登录</p>
       <el-row>
           <el-col :span="8"><div class="grid-content "></div></el-col>
           <el-col :span="8"><div class="grid-content "></div>
           <br>
           <el-form ref="form" :model="studiologin" :rules="rules" status-icon label-width="80px">
                    <el-form-item label="用户名" prop="studio_username">
                        <el-input v-model="studiologin.studio_username" placeholder="请输入工作室账户名称"></el-input>
                    </el-form-item>
                     <el-form-item label="密码" prop="studio_code">
                        <el-input v-model="studiologin.studio_code" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-row>
                        <el-col :span="8"><div class="grid-content bg-purple">
                        </div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light">
                            <el-button @click="studioLogin" type="primary"> 登录</el-button></div></el-col>
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
    name:'studio-login',
    data(){
        return{
            studiologin:{
                studio_username:'',
                studio_code:'',
            },
            //实现验证
        
        }
    },
    components:{
        'thefooter':thefooter
    },
    methods:{
        studioLogin(){
//             axios.post('http://localhost:8081/readers',{
//                 studio_username:this.studiologin.studio_username,
//                 studio_code:this.studiologin.studio_code,

//             }).then(res=>{
//                 this.responseResult=JSON.stringify(responseResult.data)
//                 if(res.data.code===200){
//                     this.$router.replace({path: '/index'})
//                 }
//         }).catch(function (error) {
//           alert("账户名或密码错误！"+error)
//         });
            this.$router.push({
                path:'/studioafterlogin',
                query:{
                     studio_id:this.studiologin.studio_username,
                     studio_code:this.studiologin.studio_username,
                }
            });
            this.$router.go(0);
        }


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
