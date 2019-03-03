<template>
<div  class="homepage">        
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
                   <el-button @click="turntocompanyapply" style="font-size:18px" type="text">公司审核</el-button>
                </li>
                <li class="nav-item" style=" margin-right:20px">
                    <el-button @click="turntostudioapply" style="font-size:18px" type="text">工作室审核</el-button>
                </li>
                <li class="nav-item" style=" margin-right:20px">
                    <el-button @click="turntoexpertapply" style="font-size:18px" type="text">专家审核</el-button>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent2" style="t">
            <div class="form-inline my-2 my-lg-0"style="margin-right:0px;float:righ">
                <p>您好！{{manager_id}}</p>
                <ul>
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        管理员
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <el-button @click="" type="text">进度查看</el-button><br>
                        <el-button @click="turntocostmanagement" type="text">费用管理</el-button><br>
                        <el-button @click="turntoadvertisement" type="text">广告位管理</el-button><br>
                        <el-button @click="turntodistributedisputes" type="text">分配纠纷项目</el-button>
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
           manager_id:this.$route.query.manager_id

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
                path:'/managerafterlogin/shouye',
                query:{
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
      },
       turntocompanyapply:function(){
          this.$router.push({
                path:'/managerafterlogin/companyapply',
                query:{
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
      },
       turntostudioapply:function(){
          this.$router.push({
                path:'/managerafterlogin/studioapply',
                query:{
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
      },
      turntoexpertapply:function(){
          this.$router.push({
                path:'/managerafterlogin/expertapply',
                query:{
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
      },




      turntocostmanagement(){
          this.$router.push({
                path:'/managerafterlogin/costmanagement',
                query:{
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
      },
      turntoadvertisement(){
          this.$router.push({
                path:'/managerafterlogin/advertisementmanagement',
                query:{
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
      },
      turntodistributedisputes(){
              this.$router.push({
                path:'/managerafterlogin/distributedisputes',
                query:{
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
      }
     
    
    }
  }
 
 
</script>
<style>
#nav1{
    z-index:5;
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

   @media(max-width: 960px) {
    #nav1.el-button {
        font-size:10px
    }    
    }
</style>
