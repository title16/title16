<template>
    <div>
        <br><br><br><br> 
        <div class="choose"><br>
            <div >
            <el-row >
                <el-col :span="8">
                    <img :src="img1" class="image">
                </el-col>
                <el-col :span="12">
                    <div>
                      
                      <!-- <P style="text-align:left; ">项目名称：{{project_name}}</P>
                      <p style="text-align:left; ">参考报价：<i style="color:#f95e21; font-size:34px; "><i class="icon-henry-renminbi1688"></i>{{project_quote}}</i></p>
                      <div style="text-align:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div> -->
                      <el-row>
                          <el-col :xs="24" :sm="18" :md="16" :lg="9" :xl="9">
                            <P style="text-align:left; ">项目名称：{{project_name}}</P>
                            <p style="text-align:left; ">参考报价：<i style="color:#f95e21; font-size:34px; "><i class="icon-henry-renminbi1688"></i>100000</i></p>
                            <div style="text-align:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>
                          </el-col>
                          <el-col :xs="24" :sm="18" :md="16" :lg="9" :xl="9">
                              &nbsp
                          </el-col>
                          <el-col :xs="24" :sm="18" :md="16" :lg="12" :xl="12">
                              <el-row>
                                  <el-col :span="12">&nbsp</el-col>
                                  <el-col :span="4">&nbsp</el-col>
                                  <el-col :span="8"><p style="text-align:right; font-size:26px; color:#34c484">招标中.&nbsp.&nbsp.</p></el-col>
                              </el-row>
                              <br>
                              <el-row>
                                  <el-col :span="8">&nbsp</el-col>
                                  <el-col :span="2">&nbsp</el-col>
                                  <el-col :span="14">
                                      <p style="text-align:right; font-size:18px; color:#35495e">已有<i style="color:red; font-size:30px;">{{biddingstudios.length}}</i>个工作室投标</p>
                                  </el-col>
                              </el-row>
                          </el-col>
                      </el-row>
                    </div>
                </el-col>
            </el-row><hr>
            <el-row>
                <el-col :span="6">&nbsp</el-col> 
                <el-col :span="10">
                    <el-row>
                        <el-col :xs="24" :sm="18" :md="16" :lg="12" :xl="12"></el-col>
                        <el-col :xs="24" :sm="18" :md="16" :lg="12" :xl="12">
                            <i class="icon-henry-xiangmu1" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">项目编号:</i></i>
                            <br>
                            <i class="icon-henry-iconfontphone" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">联系方式:</i></i>
                        </el-col>
                        <el-col :xs="24" :sm="18" :md="16" :lg="12" :xl="12">
                            <i class="icon-henry-chengshi" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">城&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp市:</i></i>
                            <br>
                            <i class="icon-henry-shijian" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">截止时间:</i></i>
                        </el-col>
                    </el-row>
                     <!-- <div style="text-align:center"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div> -->
                      <!-- <p style="text-align:center; font-size:18px; color:gray"><i class="icon-henry-xiangmu">项目编号:</i></p> -->
                      <!-- <p style="text-align:center; font-size:18px; color:gray">联系方式：</p> -->
                      <!-- <i class="icon-henry-xiangmu1" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">项目编号:</i></i>
                      <br>
                      <i class="icon-henry-iconfontphone" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">联系方式:</i></i> -->
                </el-col>
                <el-col :span="8">
                    &nbsp
                    <!-- <i class="icon-henry-chengshi" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">城&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp市:</i></i>
                    <br>
                    <i class="icon-henry-shijian" style="color:#4b4b4b">&nbsp<i style="text-align:center; font-size:18px; ">截止时间:</i></i> -->
                    <!-- <p style="text-align:left; font-size:18px; color:gray">截止时间:</p> -->
                    <!-- <p style="text-align:left; font-size:18px; color:gray">城&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp市:</p> -->
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="18" :md="16" :lg="9" :xl="9">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="4" :xl="4">
                    <!-- <p style="text-align:right; font-size:26px; color:rgba(8,29,68,1)">已有{{biddingstudios.length}}个工作室投标</p> -->
                      <!-- <p style="text-align:right; font-size:26px; color:rgba(50,91,0,1)">此项目正在招标中</p> -->
                </el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="7" :xl="7">&nbsp</el-col>
            </el-row>
            <hr style="color:#f95e21">
            </div>
            <div>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="4" :xl="4">
                    <p style="font-size:15px"> </p>
                </el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="16" :xl="16">
                    <div>
                        <p>以下是已投标的工作室</p>
                    </div>
                    <div>
                        <el-row>
                            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in biddingstudios" :key="item" :offset="0"  >        
                                <el-card  shadow="hover"style="border-radius:25px 25px 25px 25px;" class="card">
                                    <el-row>
                                        <el-col :span="12">
                                             <img src="../../assets/logo.png" class="image">
                                        </el-col>
                                        <el-col :span="12">
                                             <div style="padding: 14px;">
                                                 <span>工作室编号：{{item.id}}</span><br>
                                                 <span>项目名：{{item.name}}</span><br>                                        
                                                 <span>竞标中</span><br>
                                                 <div class="bottom clearfix">
                                                      <el-button type="text" class="button" @click="turntobiddingstudiodetail(index)">详情</el-button>
                                                 </div>       
                                            </div>   
                                        </el-col>
                                    </el-row>
                                </el-card><br>
                            </el-col>
                        </el-row>
                    </div>            
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="4" :xl="4">
                    <p style="font-size:15px"></p>
                </el-col>
                
            </el-row>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'choosetender',
    data(){
        return{
            img1:require('../../assets/logo.png'),
            project_id:this.$route.query.biddingproject_id,
            project_name:this.$route.query.biddingproject_name,
            project_num:this.$route.query.biddingproject_num,
            project_quote:this.$route.query.biddingproject_quote,
            project:{
                name:'',
                quote:'',
                desc:'',
                money:'',
            },
             biddingstudios: [
                {
                    id:1,
                    name:'工作室1',
                }, 
                {
                    id:2,
                    name:'工作室1',
                }, 
                {
                    id:3,
                    name:'工作室1',
                },
                {
                    id:4,
                    name:'工作室1',
                },
                {
                    id:5,
                    name:'工作室1',
                },
            ],
  
        }
    },
    methods: {
        turntobiddingstudiodetail(index){
             this.$router.push({
                path:'/companyafterlogin/biddingstudiodetail',
                query:{
                     company_id:this.$route.query.company_id,               
                     biddingstudio_id:this.biddingstudios[index].id,
                     biddingproject_id:this.$route.query.biddingproject_id,
                }
            });
        }
        
    },
    component:{

    }
}
</script>
<style>
.choose{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color:#fff;
    border-radius:25px 25px 10px 10px;
}
.card{
     border-color: rgba(0, 191, 255, 0.3);
     border-width: 0.8rem;
     font-size: 23px;
}
.card:hover{
    border-width: 2rem;
    border-color: rgba(0, 191, 255, 0.2);
}

  @media(max-width: 960px) {
    .choose {
      width: 100%;
      float: left;
      margin: -1rem  0 0.5rem 0;
      font-size:18px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
       .card{
      border-color: rgba(0, 191, 255, 0);
      border-width: 0rem;
      font-size: 15px;
    }
    .card:hover{
        border-width: 0.2rem;
        border-color: rgba(2, 36, 231, 0.8);
    }
    }
</style>
