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
                   <el-button @click="turntowaitting" style="font-size:18px" type="text">待处理纠纷</el-button>
                </li>
                <li class="nav-item" style=" margin-right:20px">
                    <el-button @click="turntoarbitrationhistory" style="font-size:18px" type="text">历史记录</el-button>
                </li>
                <li class="nav-item" style=" margin-right:20px">
                    <el-button @click="turntostudio" style="font-size:18px" type="text">关于我们</el-button>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent2" style="t">
            <div class="form-inline my-2 my-lg-0"style="margin-right:0px;float:righ">
                <p>您好！{{expert_id}}</p>
                <ul>
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        专家
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <el-button @click="turntoexpertinfo" type="text">我的信息</el-button><br>
                         
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
           expert_id:this.$route.query.expert_id

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
                path:'/expertafterlogin/shouye',
                query:{
                     expert_id:this.$route.query.expert_id,
                }
            });
            this.$router.go(0);
      },
      turntowaitting:function(){
         this.$router.push({
                path:'/expertafterlogin/waitting',
                query:{
                     expert_id:this.$route.query.expert_id,
                }
            });
          this.$router.go(0);
      },
       turntoarbitrationhistory:function(){
          this.$router.push({
                path:'/expertafterlogin/arbitrationhistory',
                query:{
                     expert_id:this.$route.query.expert_id,
                }
            });
            this.$router.go(0);
      },
      turntoexpertinfo:function(){
          this.$router.push({
                path:'/expertafterlogin/expertinfo',
                query:{
                     expert_id:this.$route.query.expert_id,
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
