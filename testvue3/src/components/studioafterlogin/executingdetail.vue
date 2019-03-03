<template>
    <div><br><br><br><br>
    <div class="stuidoexecutingdetail">
         <div><br>
           <el-row >
               <el-col :xs="10" :sm="11" :md="12" :lg="12" :xl="12" style="text-align:center">
                    <div class="executingdetailimage"><img v-bind:src="img1" class="image"></div>
               </el-col>
               <el-col :xs="14" :sm="13" :md="12" :lg="12" :xl="12">
                   <div style="float:right;margin-right:20px"><i style="color:#34c484">进行中...</i></div>
                   <div style="float:left;font-weight:bold;"><p>项目名：<span style="color:#4186dc">{{executingproject_name}}111</span></p></div>                   
                   <div class="clear"></div>
                   <div style="margin-bottom:5px;font-weight:bold;" class="studioexecutingdetailid"> <i class="el-icon-edit" style="float:left;font-weight:bold;"><span>编号：{{executingproject_id}}</span></i></div>
                   <div class="clear"></div>
                   <div style="text-align:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>
                   <div style="margin-top:15px;">
                        <i class="el-icon-goods"  style="float:left;font-size:16px;"><span style="">发布公司：1111111111</span></i><br>
                        <i class="el-icon-star-off"  style="float:left;font-size:16px;"><span style="">公司编号：111111</span></i><br>
                        <i class="el-icon-phone-outline"  style="float:left;font-size:16px;"><span style="">联系方式：11111156897</span></i>
                   </div><br>
                   <div style="box-shadow:#ff0000 0px 0px 3px;border-radius:5px;display: inline-block;" class="executingdetailstate"><i class="el-icon-bell" style="color:#FF3300"><span>{{executingproject_state}}</span></i></div> 
               </el-col>
           </el-row>
        </div><hr>
        <!-- <div>   
            <div v-if="seen1">
                <p>congratulation！</p>
                <p>上一进度审核通过</p>
                <p>在上次基础上进度+1</p>
                <el-button :disabled="isapplyed" @click="applyrprogresspayment">申请进度款</el-button><hr><br>
            </div>
             <div v-if="seen2">
                <p>上一进度审核未通过</p>
                <p>进度不变</p>
                <p>您可以</p>
                <el-button type="primary" @click="arbitration">发起仲裁</el-button>
                <p style="font-size:0.7rem">若发起仲裁，项目状态变为仲裁中</p>
                <p style="font-size:0.7rem">详细情况可至"纠纷项目"查看</p>
                <br><br>
            </div>
            <div v-if="seen4">
                <p>该项目停滞中</p>
                <p>正在等待甲方回应</p>
                <p style="font-size:15px">若甲方同意项目继续</p>
                <p style="font-size:15px">则项目状态变为"进行中，甲方同意继续"，当前进度+1，但无法申请进度款</p>
                <p style="font-size:15px">若甲方不同意项目继续</p>
                <p style="font-size:15px">则项目终止，您支付保证金</p>
            </div>
            <div v-if="seen5">
                <p>该项目仲裁中</p>
                <p style="font-size:15px">若仲裁结果为乙方胜</p>
                <p style="font-size:15px">则项目状态变为"进行中，上次审核通过"，当前进度+1，可以申请进度款</p>
                <p style="font-size:15px">若仲裁结果为甲方胜</p>
                <p style="font-size:15px">则项目状态变为"停滞中"</p>
                <p style="font-size:15px">详情见纠纷项目</p>
            </div><br>
        </div>
        <br><hr><br>
        <div v-if="seen3">
            <el-row>
                <el-col :span="5">&nbsp</el-col>
                <el-col :span="14">
                            <p style="">提交下一进度资料</p>
                            <p style="font-size:0.7rem">若审核通过</p>
                            <p style="font-size:0.7rem">当前进度+1</p>
                            <p style="font-size:0.7rem">且会得到进度款￥？？</p>
                            <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="../../assets"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :auto-upload="false">
                            <el-button style="margin-left: 0rem;font-size:1rem" slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 0.5rem;font-size:0.8rem" size="small" type="success" @click="submitUpload" >提交</el-button>
                            <div slot="tip" class="el-upload__tip"></div>
                            </el-upload>
                            <br><br><br><br><br>
                </el-col>
            <el-col :span="5">&nbsp</el-col>
            </el-row>
        </div> -->
    <div>
        <div v-if="seen1">
            <el-row>
                <p style="text-align:center;color:#f95e21"><i>公司审核中，请静候佳音</i></p>
                <div class="executingprogress" style="text-align:center">
                    <el-progress type="circle" :percentage="percentage" color="	#FF8C00" stroke-width=10 width=100></el-progress>
                    <el-button type="text" class="fontbutton1">当前进度(2/5)</el-button>
                </div><br><br><br><br>
            </el-row>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            executingproject_id:this.$route.query.executingproject_id,
            executingproject_name:this.$route.query.executingproject_name,
            executingproject_state:this.$route.query.executingproject_state,
            isapplyed:false,
            seen1:false,
            seen2:false,
            seen3:false,
            seen4:false,
            seen5:false,
            seen6:false,
            seen7:false,
            img1:require('../../assets/logo.png'),
            info:null,
            percentage:"40"
        }
    },
    methods: {
        submitUpload() {
        this.$refs.upload.submit();
      },
      applyrprogresspayment(){

        // axios.get('http://localhost:8081/readers', {      
        // executingproject_id:this.$route.query.executingproject_id
        
        // })
        // .then(function (response) {
        // console.log(response);
        // this.info=response;
        // })
        // .catch(function (error) {
        // console.log(error);
        // }); 
          this.$notify({
          title: '成功',
          message: '申请发起成功',
          type: 'success'
        });
        this.executingproject_state="进行中，进度款申请中",
        this.isapplyed=true;
      },
      arbitration(){
          this.$router.push({
              path:'/studioafterlogin/arbitration',
              query:{
                  studio_id:this.$route.query.studio_id,
                  executingproject_id:this.executingproject_id
              }
          })
      }
        
    },
    
   mounted() {  
       if(this.$route.query.executingproject_state=="审核中")
       {
           this.seen1=true;
           this.seen2=false;
           this.seen3=false;
       }else if(this.$route.query.executingproject_state=="进行中，上次审核通过")
       {
           this.seen1=true;
           this.seen2=false;
           this.seen3=false;
       }else if(this.$route.query.executingproject_state=="进行中，进度款申请中")
       {
           this.seen1=false;
           this.seen2=false;
           this.seen3=false;
       }
       else if(this.$route.query.executingproject_state=="进行中，上次审核失败")
       {
           this.seen1=false;
           this.seen2=true;
           this.seen3=false;
       }else if(this.$route.query.executingproject_state=="进行中，进度款申请成功")
       {
           this.seen1=false;
           this.seen2=false;
           this.seen3=true;
       }
       else if(this.$route.query.executingproject_state=="仲裁中")
       {
           this.seen1=false;
           this.seen2=false;
           this.seen3=false;
           this.seen5=true;
       }else if(this.$route.query.executingproject_state=="停滞中")
       {
           this.seen1=false;
           this.seen2=false;
           this.seen3=false;
           this.seen4=true;
       }else if(this.$route.query.executingproject_state=="进行中，甲方同意继续")
       {
           this.seen1=false;
           this.seen2=false;
           this.seen3=true;
           this.seen4=false;
       }
        axios.get('http://localhost:8081/readers', {      
        executingproject_id:this.$route.query.executingproject_id
        
        })
        .then(function (response) {
        console.log(response);
        this.info=response;
        })
        .catch(function (error) {
        console.log(error);
        }); 
       
   },
}
</script>
<style>
.stuidoexecutingdetail{
   
    font-size:24px;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: left;
    background-color: white;
    border-radius:25px 25px 10px 10px;
}
.clear{
    clear: both;
}
.image {
    max-width: 100%;
    height: auto;
    /* -webkit-box-shadow: #FFFACD 2px 2px 5px;
    box-shadow: #666 0px 0px 2px; */
}
.executingdetailimage{
    text-align: center;
}
.studioexecutingdetailid{
    float:left;
    margin-right: 2rem;
}
.executingdetailstate{
    float:right;
    margin-right:5rem;
}
  @media(max-width: 960px) {
    .stuidoexecutingdetail {
      width: 100%;
      margin: -1rem  0 0.5rem 0;
      font-size:15px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
        margin-top: 20px;
    }
    .studioexecutingdetailid{
      margin-right: 0px;

    }
    .executingdetailstate{
    float:right;
    margin-right:0rem;
    }
    }
</style>
