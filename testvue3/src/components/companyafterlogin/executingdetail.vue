<template>
    <div><br><br><br><br>
    <div class="f">
         <div><br>
           <el-row >
               <el-col :span="12">
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">
                   <div style="text-align:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>
                   <p style="">编号：{{executingproject_id}}</p>
                   <p style="text-align:left;font-size:15px">项目名：</p>
                   <p style="text-align:left;font-size:15px">工作室编号：</p>
                   <p style="text-align:left;font-size:15px">工作室名：</p>
               </el-col>
           </el-row>
        </div>
        <!-- <br><hr><br> -->
        <!-- <div>   
            <el-progress type="circle" :percentage="percentage" color="#CC66FF" stroke-width=15 width=200></el-progress>
            <p style="">当前进度(2/5)</p>
            <el-button type="primary">查看进度记录</el-button>
        </div> -->
        <!-- <br><hr><br> -->
        <div v-if="seen1 && seen2 && seen3">
            <el-row>
                <el-col :span="5">&nbsp</el-col>
                <el-col :span="14">
                            <p style="">审核本进度资料</p>
                            <p style="font-size:0.7rem">若审核通过</p>
                            <p style="font-size:0.7rem">您将支付进度款￥？？</p>
                            <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="../../assets"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :auto-upload="false">
                            <el-button style="margin-left: 0rem;font-size:1rem" slot="trigger" size="small" type="primary">查看资料</el-button>
                            <el-button style="margin-left: 0.5rem;font-size:0.8rem" size="small" type="success" @click="submitUpload" >支付</el-button>
                            <div slot="tip" class="el-upload__tip"></div>
                            </el-upload>
                            <br><br><br><br><br>
                </el-col>
            <el-col :span="5">&nbsp</el-col>
            </el-row>
        </div>
        <div v-if="seen1 && seen2 && !seen3">
            <el-col :span="5">&nbsp</el-col>
            <el-col :span="14">
                <p style="">上次审核通过!</p>
            </el-col>
            <el-col :span="5">&nbsp</el-col>
        </div>
        <div v-if="seen1 && !seen2 && seen3">
            <el-col :span="5">&nbsp</el-col>
            <el-col :span="14">
                <p style="color:red">上次审核不通过!</p>
            </el-col>
            <el-col :span="5">&nbsp</el-col>
        </div>
        <div v-if="seen1 && !seen2 && !seen3">
            <el-col :span="5">&nbsp</el-col>
            <el-col :span="14">
                <p style="">仲裁中</p>
            </el-col>
            <el-col :span="5">&nbsp</el-col>
        </div>
        <div v-if="!seen1 && seen2 && seen3">
            <el-col :span="5">&nbsp</el-col>
            <el-col :span="14">
                <p style="">停滞中</p>
                <el-row>
                    <el-col span="8"></el-col>
                    <el-col span="8">&nbsp</el-col>
                    <el-col span="8">
                         <span style="color:red">是否同意继续项目？</span>
                    </el-col>
                </el-row>
                <el-button @click="turnToAllowancePage" style="color:blue">同意</el-button>
                <el-button @click="turnToTerminationPage" style="color:blue">不同意</el-button>
                <br><br><br><br> 
            </el-col>
            <el-col :span="5">&nbsp</el-col>
        </div>
        <div v-if="!seen1 && seen2 && !seen3">
            <el-col :span="5">&nbsp</el-col>
            <el-col :span="14">
                <p style="">同意乙方继续</p>
                <el-button @click="" style="color:blue">同意</el-button>
                <br><br>
            </el-col>
            <el-col :span="5">&nbsp</el-col>
        </div>
        <div v-if="!seen1 && !seen2 && seen3">
            <el-col :span="5">&nbsp</el-col>
            <el-col :span="14">
                <p style="">终止合同</p>
                <el-button @click="" style="color:blue">确定终止合同</el-button>
                <br><br>
            </el-col>
            <el-col :span="5">&nbsp</el-col>
        </div>
        <div v-if="!seen1 && !seen2 && !seen3">
            <el-col :span="5">&nbsp</el-col>
            <el-col :span="14">
                <p style="">仲裁乙方胜，请支付该进度进度款</p>
                <el-button @click="" style="color:blue">支付进度款</el-button>
                <br><br>
            </el-col>
            <el-col :span="5">&nbsp</el-col>
        </div>
    </div>
    </div>
</template>
<<script>
export default {
    
    data(){
        return{
            executingproject_id:this.$route.query.executingproject_id,
            executingproject_state:this.$route.query.executingproject_state,
            img1:require('../../assets/logo.png'),
            info:null,
            percentage:"40",
            seen1:true,
            seen2:true,
            seen3:true,
        }
    },
    methods: {
        submitUpload() {
        this.$refs.upload.submit();
     },
     //跳转至“同意乙方继续”页面
        turnToAllowancePage:function () {
           this.seen1=false;
           this.seen2=true;
           this.seen3=false;
        },
      //跳转至“终止合同”页面
        turnToTerminationPage:function () {
           this.seen1=false;
           this.seen2=false;
           this.seen3=true;
        },
        
    },
    
   mounted() {
       if(this.$route.query.executingproject_state=="待审核中"){
            this.seen1=true;
            this.seen2=true;
            this.seen3=true;
       }
       else if(this.$route.query.executingproject_state=="上次审核通过"){
           this.seen1=true;
           this.seen2=true;
           this.seen3=false;
       }
       else if(this.$route.query.executingproject_state=='上次审核不通过'){
           this.seen1=true;
           this.seen2=false;
           this.seen3=true;
       }
       else if(this.$route.query.executingproject_state=='仲裁中'){
           this.seen1=true;
           this.seen2=false;
           this.seen3=false;
       }
       else if(this.$route.query.executingproject_state=='停滞中'){
           this.seen1=false;
           this.seen2=true;
           this.seen3=true;
       }
       else if(this.$route.query.executingproject_state=='同意乙方继续'){
           this.seen1=false;
           this.seen2=true;
           this.seen3=false;
       }
       else if(this.$route.query.executingproject_state=='终止合同'){
           this.seen1=false;
           this.seen2=false;
           this.seen3=true;
       }
       else if(this.$route.query.executingproject_state=='仲裁乙方胜，请支付该进度进度款'){
           this.seen1=false;
           this.seen2=false;
           this.seen3=false;
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
.f{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    height:40rem; 
    overflow:auto

}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .f {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
</style>
