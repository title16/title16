<template>
<!-- import func from './vue-temp/vue-editor-bridge'; -->
<div>        
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav1">
        <a class="navbar-brand" style="font-size:25px">天眼</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span>首页</span>
        </button>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
            <span >您</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" style="padding-left:100px">
                <li class="nav-item" style=" margin-right:20px">
                    <!-- <p class="nav-link" @click="turntoshouye">首页</p> -->
                    <el-button @click="turntoshouye" style="font-size:18px" type="text">首页</el-button>
                </li>
                <li class="nav-item" style=" margin-right:20px">
                   <el-button @click="turntoproject" style="font-size:18px" type="text">需求大厅</el-button>
                </li>
                <li class="nav-item" style=" margin-right:20px">
                    <el-button @click="turntostudio" style="font-size:18px" type="text">入驻工作室</el-button>
                </li>
                <li class="nav-item" style=" margin-right:20px">
                    <el-button @click="turnToaboutUs" style="font-size:18px" type="text">关于我们</el-button>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent2" style="t">
            <div class="form-inline my-2 my-lg-0"style="margin-right:0px;float:righ">
                <p>您好！{{id}}</p>
                <ul>
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        我的公司
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <el-button @click="turntoproject" type="text">发布需求</el-button><br>
                        <el-button @click="turntobidding" type="text">正在招标</el-button><br>
                        <el-button @click="turntoexecuting" type="text">进行中项目</el-button><br>
                        <el-button @click="turntoended" type="text">已完成项目</el-button><br>
                        <el-button @click="turntodisputing" type="text">纠纷项目</el-button><br>
                        <el-button @click="turntoshouye" type="text">公司管理</el-button><br>
                         
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/">退出</a>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        
    </nav>
     <router-view></router-view>
</div>
</template>
<script>

  export default {
    name:'app',
    inject:['reload'],
    data() {
      return {
           id:this.$route.query.company_id

      };
    },
    components:{
    
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      turntologin:function(){
          this.$router.push('/login');
          this.$router.go(0);
         
      },
       turntoshouye:function(){
          this.$router.push({
                path:'/companyafterlogin/shouye',
                query:{
                     company_id:this.$route.query.company_id,
                     code:this.$route.query.code,
                }
            });
            this.$router.go(0);
      },
      turntoproject:function(){
         this.$router.push({
                path:'/companyafterlogin/postProject',
                query:{
                     company_id:this.$route.query.company_id,
                     code:this.$route.query.code,
                }
            });
          this.$router.go(0);
      },
       turntostudio:function(){
          this.$router.push({
                path:'/companyafterlogin/studio',
                query:{
                     company_id:this.$route.query.company_id,
                     code:this.$route.query.code,
                }
            });
            this.$router.go(0);
      },
      turntobidding:function(){
          this.$router.push({
                path:'/companyafterlogin/bidding',
                query:{
                     company_id:this.$route.query.company_id,
                     code:this.$route.query.code,
                }
            });
            this.$router.go(0);
      },
      turntoexecuting:function(){
          this.$router.push({
                path:'/companyafterlogin/executing',
                query:{
                     company_id:this.$route.query.company_id,
                     code:this.$route.query.code,
                }
            });
             this.$router.go(0);
      },
      turntoended:function(){
          this.$router.push({
              path:'/companyafterlogin/ended',
              query:{
                   company_id:this.$route.query.company_id,
                     code:this.$route.query.code
              }
          });
          this.$router.go(0);
      },
      turntodisputing:function(){
          this.$router.push({
              path:'/companyafterlogin/disputing',
              query:{
                   company_id:this.$route.query.company_id,
                     code:this.$route.query.code
              }
          });
          this.$router.go(0);
      },
     turnToaboutUs:function(){
          this.$router.push({
              path:'/companyafterlogin/aboutus',
              query:{
                   company_id:this.$route.query.company_id,
                    code:this.$route.query.code
              }
          });
          this.$router.go(0);
      },
 
    }
  }
 
 
</script>
<style>
#nav1{
    z-index:3;
    position:fixed;
    top:0;
    width:100%;
    opacity:1;
    background-color: blue;
}
.el-button {
    margin-left:20px;
    font-size:18px;
    box-sizing: border-box;
  }
.el-button:hover{
    color:chartreuse;
  }
  
  
</style>
