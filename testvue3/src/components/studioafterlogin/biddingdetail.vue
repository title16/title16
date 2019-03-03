<template>
    <div>
        <br><br><br><br> 
        <div class="studioafterloginbiddingdetail">
        <div>
          <el-row>
            <el-col :xs="10" :sm="8" :md="8" :lg="8" :xl="8" style="background-color:"><br>
              <div style="text-align:center"><img :src="img1" class="image1"></div>
            </el-col>        
            <el-col :xs="14" :sm="16" :md="16" :lg="16" :xl="16" style="background-color"><br>              
              <p style="float:left">项目名：<i>44444444</i></p>
              <p style="float:right;color:#34c484;" class="biddingjingbiao">竞标中...</p><br>            
              <div class="clear"></div><!--换行-->
              <div><p style="float:left;">参考报价：<i style="color:#f95e21" class="price">￥10000</i></p></div>
              <div class="clear"></div>
              <div style="float:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>        
              <div style="float:right;" class="biddingtoubiao"><p>共有<i style="font-weight:bold;font-style:italic;color:red;font-size:26px">5</i>个工作室竞标，静候佳音</p></div>
              <div class="clear"></div>
              <a class='download lianjie'  style="float:right;" target="new_blank" :href='"https://img03.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-d72d635343d5bade-ae6404b1b96f0c25074a4a751dcb8208.jpg"' download=""  title="下载">在线预览</a> 
              <el-button style="float:right;margin-right:0.5rem;" type="warning" size="mini" @click="download3(a)">招标书</el-button>          
            </el-col>
          </el-row><hr>
          

          <div class="row1">
            <el-row>
              <el-col :xs="24" :sm="3" :md="4" :lg="6" :xl="6">&nbsp</el-col>
              <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
                <i class="el-icon-edit" style="float:left"><i>编&nbsp&nbsp&nbsp&nbsp&nbsp号：{{biddingproject_id}}</i></i><br>
              </el-col>
              <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
                <i class="el-icon-location-outline" style="float:left"><i>城&nbsp&nbsp&nbsp&nbsp&nbsp市：{{project_id}}</i></i><br>
              </el-col>
              <el-col :xs="0" :sm="3" :md="4" :lg="6" :xl="6">&nbsp</el-col>
            </el-row>
            

            <el-row>
              <el-col :xs="0" :sm="3" :md="4" :lg="6" :xl="6">&nbsp</el-col>
              <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
                <i class="el-icon-phone-outline"  style="float:left"><i>联系方式：{{project_id}}13356562323</i></i><br>
              </el-col>
              <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
                <i class="el-icon-time" style="float:left"><i>截止时间：{{project_id}}</i></i><br>
              </el-col>
              <el-col :xs="24" :sm="3" :md="4" :lg="6" :xl="6">&nbsp</el-col>
            </el-row>

            <el-row>
              <el-col :span="3">
                  <p style="font-size:15px"> </p>
              </el-col>
                <el-col :span="18"> <hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />
                  <p style="font-size:15px">项目简介：《共产党宣言》（又译《共产主义宣言》）是马克思和恩格斯为共产主义者同盟起草的纲领，全文贯穿马克思主义的历史观 [1]  ，马克思主义诞生的重要标志。由马克思执笔写成 。1848年2月21日在伦敦第一次以单行本问世。2月24日，《共产党宣言》正式出版。
宣言第一次全面系统地阐述了科学社会主义理论，指出共产主义运动将成为不可抗拒的历史潮流。
2015年11月，被评为最具影响力的20本学术书之一。2018年，《共产党宣言》发表170周年，回望《共产党宣言》诞生以来的170年，人类社会见证了种种思潮的激荡，经历了无尽的风云变幻，始终不变的是对和平幸福美好的追求。 [2-4] </p>
              </el-col>
                <el-col :span="3">
                  <p style="font-size:15px"></p>
              </el-col>       
            </el-row>
            <br><br><br><br><br><br>
          </div>

        </div>
      </div>

    </div>
</template>
<script>
export default {
    data() {
      return {
           biddingproject_id:this.$route.query.biddingproject_id,
           studio_id:this.$route.query.studio_id,
           img1:require('../../assets/logo.png'),
           info:null
      };
    },

    methods:{
           
    },

    mounted () {
      axios.get('http://localhost:8081/readers', {      //传
      id:this.$route.query.biddingproject_id
      
    })
    .then(function (response) {
      console.log(response);
      this.info=response;
    })
    .catch(function (error) {
      console.log(error);
    }); 
    }
}
</script>
<style>
.studioafterloginbiddingdetail{
   font-size:24px;
    margin-left:2rem;
    margin-right:2rem;
    margin-top:0rem;
    text-align: left;
    border-radius:25px 25px 10px 10px;
    background-color:#fff;
}
.row1{
    font-size:18px;
    color:#4b4b4b;
    font-style:italic;
    text-align: center;
    margin-left: 2rem;
}
.biddingjingbiao{
  margin-right:10rem;
  font-size: 18px;
}
.biddingtoubiao{
      margin-right:15rem;
      font-size: 22px;
}
.clear{
  clear: both;
}
.lianjie{
  margin-right: 2rem;
  margin-top: 5px;
  font-size: 20px;
}
.price{
  font-size: 30px;
}
  @media(max-width: 800px) {
    .studioafterloginbiddingdetail {
      width: 100%;
      float: left;
      margin: -1rem  0 0.5rem 0;
      font-size:16px;
      text-align: center;
    }
    .image1{
      width:80%;
      margin-top: 20px;
    }
    .biddingjingbiao{
      margin-right:0rem;
      font-size: 16px;

    }
    .biddingtoubiao{
      margin:0rem;
      font-size: 14px;
    }
    .lianjie{
    margin-right: 5px;
    margin-top:8px;
    font-size: 14px;
    }
    .price{
      font-size: 24px;
    }
    }
</style>
