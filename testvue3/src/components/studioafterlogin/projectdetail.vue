<template>
    <div>
        <br><br><br><br> 
        <!-- <div class="f"><br>
            <div >
            <el-row >
                <el-col :span="12">
                    <img :src="img1">
                </el-col>
                <el-col :span="12">
                    <div >
                      <P>项目编号：{{project_id}}</P>
                      <p>参考报价：</p>
                      <p>25000RMB</p>
                      <div style="text-align:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>
                      <p style="text-align:left; font-size:15px">项目名：</p>
                      <p style="text-align:left; font-size:15px">发布公司：</p>
                      <p style="text-align:left; font-size:15px">联系方式：</p>
                      <p style="text-align:left; font-size:15px">城市：</p>
                      <p style="text-align:left; font-size:15px">截止时间：</p>
                      <p style="text-align:left; font-size:15px">已有xx个工作室投标</p>
                      <el-button style="float:right; font-size:15px;margin-right:5rem" @click="tobid">我要投标</el-button>
                    </div>
                </el-col>
            </el-row>
            <hr>
            </div>
            <div><br>
            <el-row>
                <el-col :span="3">
                    <p style="font-size:15px"> </p>
                </el-col>
                  <el-col :span="18">
                    <p style="font-size:15px">项目简介：《共产党宣言》（又译《共产主义宣言》）是马克思和恩格斯为共产主义者同盟起草的纲领，全文贯穿马克思主义的历史观 [1]  ，马克思主义诞生的重要标志。由马克思执笔写成 。1848年2月21日在伦敦第一次以单行本问世。2月24日，《共产党宣言》正式出版。
宣言第一次全面系统地阐述了科学社会主义理论，指出共产主义运动将成为不可抗拒的历史潮流。
2015年11月，被评为最具影响力的20本学术书之一。2018年，《共产党宣言》发表170周年，回望《共产党宣言》诞生以来的170年，人类社会见证了种种思潮的激荡，经历了无尽的风云变幻，始终不变的是对和平幸福美好的追求。 [2-4] </p>
<el-button style="float:right; font-size:15px;margin-right:5rem" @click="" type="primary">招标书</el-button>
                </el-col>
                  <el-col :span="3">
                    <p style="font-size:15px"></p>
                </el-col>
                
            </el-row>
            </div>
        </div> -->


      <div class="studioafterloginprojectdetail">
        <div>
          <el-row>
            <el-col :xs="10" :sm="8" :md="8" :lg="8" :xl="8" style="background-color:"><br>
              <div style="text-align:center"><img :src="img1" class="image1"></div>
            </el-col>        
            <el-col :xs="14" :sm="16" :md="16" :lg="16" :xl="16" style="background-color"><br>
              <p style="float:left">项目名：<i>4444444</i></p>
              <p style="float:right;color:#34c484;" class="zhaobiao">招标中...</p><br>
              <div class="clear"></div><!--换行-->
              <div><p style="float:left;">参考报价：<i style="color:#f95e21" class="price">￥10000</i></p></div>
              <div class="clear"></div>
              <div style="float:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>        
              <div style="float:right;font-size:18px;" class="toubiao"><p>已有<i style="font-weight:bold;font-style:italic;color:red;font-size:26px">5</i>个工作室投标</p></div>
              <div class="clear"></div>
              <a class='download lianjie'  style="float:right;" target="new_blank" :href='"https://img03.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-d72d635343d5bade-ae6404b1b96f0c25074a4a751dcb8208.jpg"' download=""  title="下载">在线预览</a> 
              <el-button style="float:right;margin-right:0.2rem;" type="warning" size="mini" @click="download3(a)" class="buttonfont">招标书</el-button>
              <el-button style="float:right;margin-right:-15px;" type="primary" size="mini" @click="tobid" class="buttonfont">投标</el-button>          
            </el-col>
          </el-row><hr>
          

          <div class="row1">
            <el-row>
              <el-col :xs="24" :sm="3" :md="4" :lg="6" :xl="6">&nbsp</el-col>
              <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
                <i class="el-icon-edit" style="float:left"><i>编&nbsp&nbsp&nbsp&nbsp&nbsp号：{{project_id}}</i></i><br>
              </el-col>
              <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
                <i class="el-icon-location-outline" style="float:left"><i>城&nbsp&nbsp&nbsp&nbsp&nbsp市：{{project_id}}</i></i><br>
              </el-col>
              <el-col :xs="0" :sm="3" :md="4" :lg="6" :xl="6">&nbsp</el-col>
            </el-row>
            

            <el-row>
              <el-col :xs="0" :sm="3" :md="4" :lg="6" :xl="6">&nbsp</el-col>
              <el-col :xs="24" :sm="9" :md="8" :lg="6" :xl="6">
                <i class="el-icon-phone-outline"  style="float:left"><i>联系方式：{{project_id}}11111156897</i></i><br>
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
           project_id:this.$route.query.project_id,
           img1:require('../../assets/logo.png'),
           info:null,
           a:'https://img03.sogoucdn.com/app/a/100520093/ca86e620b9e623ff-d72d635343d5bade-ae6404b1b96f0c25074a4a751dcb8208.jpg',
      };
    },

    methods:{
            tobid:function(){
                this.$router.push({
                    path:'/studioafterlogin/bid',
                    query:{
                      studio_id:this.$route.query.studio_id,
                      project_id:this.project_id
                    }
                    });
                this.$router.go(0);
            },
            download3:function(url){
                 var x=new XMLHttpRequest();
                x.open("GET", url, true);
                x.responseType = 'blob';
                x.onload=function(e){
                download(x.response, "文档.gif");
                };

                x.send();
            }
   

    },

    mounted () {
      axios.post('http://localhost:8081/readers', {      //传
      id: this.project_id
      
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
.studioafterloginprojectdetail{
   
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
    margin-left: 50px;
}
.zhaobiao{
  margin-right:10rem;
  font-size: 18px;
}
.toubiao{
      margin-right:15rem;
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
    .studioafterloginprojectdetail {
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
    .zhaobiao{
      margin-right:0rem;
      font-size: 14px;
    }
    .toubiao{
      margin:0rem;
    }
    .lianjie{
    margin-right: 0rem;
    margin-top:8px;
    font-size: 14px;
    }
    .price{
      font-size: 24px;
    }
    .buttonfont{
      font-size: 12px;
    }
    }
</style>
