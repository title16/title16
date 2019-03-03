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
                        <div style="text-align:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>
                      <P>项目编号：{{executingproject_id}}</P>
                      <p style="text-align:left; font-size:15px">项目名:</p>

                      <P>甲方编号：</P>                                   
                      <p style="text-align:left; font-size:15px">公司名：</p>
                      <p style="text-align:left; font-size:15px">联系方式：</p>
                      <p>乙方编号：{{studio_id}}</p>
                      <p style="text-align:left; font-size:15px">工作室名：</p>
                      <p style="text-align:left; font-size:15px">联系方式：</p>
                    </div>
                </el-col>
            </el-row>
            <hr>
            </div>
            <div><br>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">
                    <p style="font-size:15px"> </p>
                </el-col>
                  <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                    <p style="font-size:15px">您与甲方于本项目的第？进度发生纠纷</p>
                    <p style="font-size:15px">请递交您的详细说明</p>
                    <p style="font-size:15px">这会直接影响到仲裁结果</p>
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
                            </el-upload><br><br><br><br><br>
                </el-col>
                  <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">
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
           executingproject_id:this.$route.query.executingproject_id,
           studio_id:this.$route.query.studio_id,
           img1:require('../../assets/logo.png'),
           info:null
      };
    },

    methods:{
           
    },

    mounted () {
      axios.post('http://localhost:8081/readers', {      
      executingproject_id:this.$route.query.executingproject_id
      
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
    border-radius:25px 25px 10px 10px;
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
