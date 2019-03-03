<template>
<div>
 <!-- <head></head> -->
<!-- <div id="app" class="header">
 <el-menu default-active=1 class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#3399FF" text-color="#fff" active-text-color="#990000">
 <el-menu-item index="1" ><a href="#shouye">首页</a></el-menu-item>
 <el-menu-item index="2"><a href="#project">需求大厅</a></el-menu-item> 
 <el-menu-item index="3"><a href="#studio">入驻工作室</a></el-menu-item>  
 <el-menu-item index="4"><a href="#about">关于我们</a></el-menu-item> 
 <el-menu-item index="5" type="button" @click="login">登录/注册</el-menu-item>  
</el-menu>
</div> -->
<!-- <div class="header" >
          <el-menu default-active="" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#3399FF" text-color="#fff" active-text-color="#990000">
          <el-menu-item index="1"  type="text"  @click="turntoshouye"> 首页 </el-menu-item>
          <el-menu-item index="2"  type="text" @click="turntoproject">需求大厅 </el-menu-item> 
          <el-menu-item index="3"  type="text" @click="turntostudio" >入驻工作室 </el-menu-item>  
          <el-menu-item index="4" type="text" > 关于我们 </el-menu-item> 
          <el-menu-item index="5" type="text" @click="turntologin">登录/注册</el-menu-item>  
          </el-menu>
         </div> -->
         
            <nav class="navbar navbar-expand-lg navbar-light bg-light header" id="nav1">
        <a class="navbar-brand" style="font-size:25px">天眼</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
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
                    <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div> -->
                </li>
                <li class="nav-item" style=" margin-right:20px">
                   <el-button @click="turnToAboutUs" style="font-size:18px" type="text">关于我们</el-button>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
                <button class="btn btn-outline-success my-2 my-sm-0" @click="turntologin">登录/注册</button>
            </form>
        </div>
    </nav>
     <router-view></router-view>
<!-- <div id="shouye">
<el-carousel :interval="2000" arrow="always"   height="500px" >
    <el-carousel-item v-for="item in 3" :key="item">
     <p>{{item}}</p> 
    </el-carousel-item>
  </el-carousel>
<br><br><br><br>
</div> -->

<!-- <div id="project">
<div>
<el-row>
    <el-col :span="5">
        <div>
            <i class="el-icon-d-arrow-right"> </i>
        </div>
    </el-col>
    <el-col :span="11">
        <div>
            <h style="font-family:Hiragino Sans GB;font-size:25px"><b>公司招标项目</b></h>
        </div>
     </el-col>
     <el-col :span="8">
        <div>
           <img src="../assets/project.png" class="img-responsive">
        </div>
     </el-col>
</el-row >
</div>
<div style="background-color:white">
    <el-row>
        <el-col :span="8">
            <p style="font-size:20px">推荐项目</p>
        </el-col>
        <el-col :span="10">
              <p>&nbsp</p>
        </el-col>
        <el-col :span="6">
            <p>更多项目<i class="el-icon-caret-right"></i></p>
        </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">       
    <el-col :xs="20" :sm="10" :md="6" :lg="6" :xl="6" v-for="(o, index) in 8" :key="o" >
        <el-card  shadow="hover">
        <img src="../assets/logo.png" class="image">
        <div style="padding: 14px;">
            <span>项目名：</span>
            <div class="bottom clearfix">
            <el-button type="text" class="button">详情</el-button>
            </div>
        </div>
        </el-card>
    </el-col>
    </el-row>
<br><br>
</div>
</div>
 <br><br><br><br>
<div id="studio">
<div>
<el-row>
    <el-col :span="5">
        <div>
           <img src="../assets/studio.png" width="60%">
        </div>
    </el-col>
    <el-col :span="11">
        <div>
            <h style="font-family:Hiragino Sans GB;font-size:25px"><b>工作室店铺</b></h>
        </div>
     </el-col>
     <el-col :span="8">
        <div>
            <i class="el-icon-d-arrow-left"></i>
        </div>
     </el-col>
</el-row>
 </div>
<div style="background-color:white">
    <el-row>
        <el-col :span="8">
            <p style="font-size:20px">推荐工作室</p>
        </el-col>
        <el-col :span="9">
              <p>&nbsp</p>
        </el-col>
        <el-col :span="7">
           <el-button type="primary" @click="turntostudio">更多工作室</el-button><i class="el-icon-caret-right"></i>
        </el-col>
    </el-row>
    <br>
    <el-row :gutter="20">
    <el-col :xs="20" :sm="10" :md="10" :lg="6" :xl="6" v-for="(o, index) in 6" :key="o" :offset="1" > 
        <el-card  shadow="hover">
        <img src="../assets/logo.png" class="image">
        <div style="padding: 14px;">
            <span>工作室名：</span>
            <div class="bottom clearfix">
            <el-button type="text" class="button">详情</el-button>
            </div>
        </div>
        </el-card>
    </el-col>
    </el-row>
<br><br>
</div>
<br>
</div>
<div id="about" style="background-color:#000033">
      联系我们<br>
      中国计量大学<br>
      Copyright ©2019 
</div> -->
</div>
</template>
<script>

  export default {
    name:'app',
    inject:['reload'],
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        currentDate: new Date()
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
          this.$router.push('/shouye');
          this.$router.go(0);
      },
      turntoproject:function(){
          this.$router.push('/project');
          this.$router.go(0);
      },
       turntostudio:function(){
          this.$router.push('/studio');
          this.$router.go(0);
      },
      turnToAboutUs:function(){
          this.$router.push('/aboutUs');
          this.$router.go(0);
      },
    }
  }
   
$(function () {
var	nav= $('#nav1');
nav.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
$(window).scroll(function () {
st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
if (st >= parseInt(nav.attr('otop'))) {
if (nav.css('position') != 'fixed') nav.css({ 'position': 'fixed', top:0});
}else if (nav.css('position') != 'static') nav.css({ 'position': 'static' });
});
});
 
</script>
<style>
  .el-carousel__item h {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(n) {
    background:url(../assets/logo.png);
    background-position:center;
    background-repeat:no-repeat;
     background-color:#33CC00;
  }
  
  .el-carousel__item:nth-child(2n) {
    background:url(../assets/logo2.png);
    background-position:center;
    background-repeat:no-repeat;
    background-color: #00CCFF;
  }
  .el-carousel__item:nth-child(3n) {
    background:url(../assets/logo2.png);
    background-position:center;
    background-repeat:no-repeat;
    background-color: #FFFF99;
  }
  .img-responsive {
  display: inline-block;
  height: auto;
  max-width: 100%;
}
  .header
  {
    z-index:3;
    position:fixed;
    top:0;width:100%;
    opacity:1
  }
</style>
