<template>
<div>        
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav1">
        <a class="navbar-brand" style="font-size:25px">天眼</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span>首页</span>
        </button>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
            <span >我</span>
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
                    <el-button @click="turntostudio" style="font-size:18px" type="text">关于我们</el-button>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent2" style="">
            <div class="form-inline my-2 my-lg-0"style="margin-right:0px;">
                <p>我的工作室</p>
                <ul>
                 <li class="nav-item dropdown" style="margin-left:-2rem;">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        {{id}}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <el-button @click="turntoproject" type="text">寻找项目</el-button><br>
                        <el-button @click="turntobidding" type="text">竞标中项目</el-button><br>
                        <el-button @click="turntoexecuting" type="text">进行中项目</el-button><br>
                        <el-button @click="turntoended" type="text">已完成项目</el-button><br>
                        <el-button @click="turntodisputing" type="text">纠纷项目</el-button><br>
                        <el-button @click="turntostudiomanagement" type="text">工作室管理</el-button><br>
                         
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
           id:this.$route.query.studio_id

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
                path:'/studioafterlogin/shouye',
                query:{
                     studio_id:this.$route.query.studio_id,
                     code:this.$route.query.code,
                }
            });
            this.$router.go(0);
      },
      turntoproject:function(){
         this.$router.push({
                path:'/studioafterlogin/project',
                query:{
                     studio_id:this.$route.query.studio_id,
                     code:this.$route.query.code,
                }
            });
          this.$router.go(0);
      },
       turntostudio:function(){
          this.$router.push({
                path:'/studioafterlogin/studio',
                query:{
                     studio_id:this.$route.query.studio_id,
                     code:this.$route.query.code,
                }
            });
            this.$router.go(0);
      },
      turntobidding:function(){
          this.$router.push({
                path:'/studioafterlogin/bidding',
                query:{
                     studio_id:this.$route.query.studio_id,
                     code:this.$route.query.code,
                }
            });
            this.$router.go(0);
      },
      turntoexecuting:function(){
          this.$router.push({
                path:'/studioafterlogin/executing',
                query:{
                     studio_id:this.$route.query.studio_id,
                     code:this.$route.query.code,
                }
            });
             this.$router.go(0);
      },
      turntoended:function(){
          this.$router.push({
              path:'/studioafterlogin/ended',
              query:{
                   studio_id:this.$route.query.studio_id,
                     code:this.$route.query.code
              }
          });
          this.$router.go(0);
      },
      turntodisputing:function(){
          this.$router.push({
              path:'/studioafterlogin/disputing',
              query:{
                   studio_id:this.$route.query.studio_id,
                     code:this.$route.query.code
              }
          });
          this.$router.go(0);
      },
       turntostudiomanagement:function(){
          this.$router.push({
              path:'/studioafterlogin/studiomanagement',
              query:{
                   studio_id:this.$route.query.studio_id,
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
.nav-item{
    list-style-type:none;
    border-top-width:50px;
    border-top-color: aqua;
}
#navbarSupportedContent2{
    position: fixed;
    right: 70px;
}
@media (max-width: 960px) {
    #navbarSupportedContent2{
    position: relative;
    margin-left:8rem;
    
}
}
  
</style>
