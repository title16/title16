<template>
    <div>
        <br><br><br><br> 
        <div class="f"><br>
            <div >
            <el-row >
                <el-col :span="12">
                    <img :src="img1" class="image">
                </el-col>
                <el-col :span="12">
                    <div >
                      <P>项目编号：{{postproject_id}}</P>
                      <p>参考报价：</p>
                      <p>25000RMB</p>
                      <div style="text-align:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>
                      <p style="text-align:left; font-size:15px">项目名:</p>
                      <p style="text-align:left; font-size:15px">发布公司：</p>
                      <p style="text-align:left; font-size:15px">联系方式：</p>
                      <p style="text-align:left; font-size:15px">城市：</p>
                      <p style="text-align:left; font-size:15px">截止时间：</p>
                      <p style="text-align:left; font-size:15px">已有xx个工作室投标</p>
                       <p style="text-align:left; font-size:15px">您已投标此项目！</p>
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
                    <p style="font-size:15px">湖人目前只有28胜27负排在西部第10位，但他们距离西部第6位的爵士只差3个胜场。交易截止日前湖人本想换来安东尼-戴维斯，但最终以失败告终。湖人通过交易换来了布洛克和穆斯卡拉，这两人都有出色投射能力。

佩林卡将两个新援跟超级碗MVP朱利安-埃德尔曼对比，他认为，爱国者是在埃德尔曼结束禁赛回归后开始进入节奏，他希望湖人也能在引援过后找到节奏。佩林卡说道：“我希望他们能像埃德尔曼那样，一个球员就能对球队整体的化学反应产生影响，我希望这两个球员来了后也能有那样的影响力。”

去年夏天，湖人在引援时重组织者轻射手，他们是本赛季三分火力最弱的球队之一。在截止日前，湖人连续引进射手，这是否代表湖人在纠正休赛期时的错误？佩林卡表示：“我并不认为球队这样做是全盘推翻之前的策略，我们的风格就是囤积组织者，我觉得可能算是调整吧。” </p>
<el-button style="float:right; font-size:15px;margin-right:5rem" @click="" type="primary">招标书</el-button>
                </el-col>
                  <el-col :span="3">
                    <p style="font-size:15px"></p>
                </el-col>
                
            </el-row>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
      return {
           postproject_id:this.$route.query.postproject_id,
           company_id:this.$route.query.company_id,
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
.f{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color:#fff;
}
.g{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
     margin-top:2rem;
    text-align: center;
    background-color:#ababab;
    height:400px
}

  @media(max-width: 960px) {
    .f {
      width: 100%;
      float: left;
      margin: 0.5rem 0 0.5rem 0;
      font-size:18px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
</style>
