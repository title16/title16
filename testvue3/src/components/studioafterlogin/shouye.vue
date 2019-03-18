<template>
    <div id="shouye">
      <br><br>  <br><br>  <br>
<el-carousel :interval="2000" arrow="always"   height="500px" type="card">
    <el-carousel-item v-for="item in 3" :key="item">
    </el-carousel-item>
  </el-carousel>
<br><br><br><br>
</div>
</template>
<script>
export default {
    
}
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
    background:url(../../assets/logo.png);
    background-position:center;
    background-repeat:no-repeat;
     background-color:#33CC00;
  }
  
  .el-carousel__item:nth-child(2n) {
    background:url(../../assets/logo2.png);
    background-position:center;
    background-repeat:no-repeat;
    background-color: #00CCFF;
  }
  .el-carousel__item:nth-child(3n) {
    background:url(../../assets/logo2.png);
    background-position:center;
    background-repeat:no-repeat;
    background-color: #FFFF99;
  }
  .img-responsive {
  display: inline-block;
  height: auto;
  max-width: 100%;
}

</style>