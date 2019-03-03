
<template>
  <div id="app">
        <!-- <div class="header" >
          <el-menu default-active="" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#3399FF" text-color="#fff" active-text-color="#990000">
          <el-menu-item index="1"  type="text"  @click="turntoshouye"> 首页 </el-menu-item>
          <el-menu-item index="2"  type="text" @click="turntoproject">需求大厅 </el-menu-item> 
          <el-menu-item index="3"  type="text" @click="turntostudio" >入驻工作室 </el-menu-item>  
          <el-menu-item index="4" type="text" > 关于我们 </el-menu-item> 
          <el-menu-item index="5" type="text" @click="turntologin">登录/注册</el-menu-item>  
          </el-menu>
         </div>   -->
 <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" -->
 <div id="particles"></div>       
 <!-- <studiohomepage></studiohomepage> -->
 <!-- <projectdetail></projectdetail> -->
     <router-view></router-view>
  </div>
</template>

<script>

import Hellowworld from './components/homepage1.vue'
import searchstudio from './components/searchstudio.vue'
import search from './components/search.vue'
import head from './components/head.vue'
import shouye from './components/homepage/shouye.vue'
import searchbar from './components/searchBar'
import studiohomepage from './components/studioafterlogin/studiohomepage.vue'
import projectdetail from './components/studioafterlogin/projectdetail.vue'
import bid from './components/studioafterlogin/bid.vue'
export default {
  name: 'App',
  components:{
    homepage:Hellowworld,
    searchstudio:searchstudio,
    search:search,
    head:head,
    Hellowworld:Hellowworld,
    shouye:shouye,
    searchbar:searchbar,
    studiohomepage:studiohomepage,
    projectdetail:projectdetail,
    bid:bid
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true,
    }
  },
  mounted() {
      particlesJS.load('particles', '../static/particles.data');
    },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      reload:function() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
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
   }
}

</script>

<style>

  #particles {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: -10;
  }
  /*引入iconfont*/
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
