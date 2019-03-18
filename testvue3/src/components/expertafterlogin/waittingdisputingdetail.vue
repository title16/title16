<template>
    <div><br><br><br><br>
    <div class="f1">
         <div><br>
           <el-row >
               <el-col :span="12">
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">
                   <div style="text-align:left;"><el-tag>人力外包</el-tag><el-tag>微信小程序</el-tag></div>
                   <p style="">项目编号：{{waittingdisputingproject_id}}</p>
                   <p style="text-align:left;font-size:15px">项目名：</p>
                   <p style="text-align:left;font-size:15px" v-if="seen1">双方于本项目的第？进度发生纠纷</p>
                   <p style="text-align:left;font-size:15px" v-if="seen2">甲方为乙方评价？？</p>
                   <el-button size="mini" style="font-size:8px;float:left"type="warning">招标书</el-button>
                   <el-button size="mini" style="font-size:8px;float:left"type="warning">时间进度表</el-button>
               </el-col>
           </el-row>
        </div><br><hr>
        <div>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                    <div class="container">
                    <p style="text-align:left;">甲方</p>
                    <p style="text-align:left;">发布公司编号：</p>
                    <p style="text-align:left;">公司名：</p>
                    <p style="text-align:left;">联系方式：</p>
                    <p style="text-align:left;">支撑材料</p>
                    <el-button type="warning">下载查看</el-button>
                    <br><hr>
                    <p style="text-align:left;">乙方</p>
                    <p style="text-align:left;">承包工作室编号：</p>
                    <p style="text-align:left;">工作室名：</p>
                    <p style="text-align:left;">联系方式：</p>
                    <p style="text-align:left;">支撑材料</p>
                    <el-button type="warning">下载查看</el-button>
                    </div>
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
            </el-row>
        </div>
        <hr>
        <div>
            <p>您将会得到￥作为报酬</p>
            <p>请公平公正仲裁</p>
            <p style="font-size:18px">只有一次选择机会！</p>
        </div>
        <div v-if="seen1"><br>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                     <p>您支持</p>
                       <el-radio v-model="radio" label="甲">甲</el-radio>
                       <el-radio v-model="radio" label="乙">乙</el-radio> <br>
                     <p>上传说明材料</p>  
                      <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="../../assets"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :auto-upload="false">
                            <el-button style="margin-left: 0rem;font-size:1rem" slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 0.5rem;font-size:0.8rem"  type="success" @click="submitUpload" >确认仲裁</el-button>
                            <div slot="tip" class="el-upload__tip"></div>
                            </el-upload>            
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
            </el-row>
        </div>
        <div v-if="seen2"><br>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                     <p>您支持</p>
                       <el-button :disabled="jia" @click="choosejia" type="primary">甲</el-button>
                       <el-button :disabled="yi" @click="chooseyi" type="primary">乙</el-button> <br>
                    <div>
                      <transition  name="fade">
                      <div v-if="show">
                     <p>您的建议评价</p>
                     <el-form :model="form1" :rules="rules">
                      <el-form-item prop="mark"  >
                      <el-input style="width:80%"
                        placeholder="请输入评价"
                        v-model="form1.price"
                        type="number"
                        clearable>
                      </el-input>
                      </el-form-item>
                      </el-form>
                      </div>
                      </transition>
                   
                    </div>
                    <div v-if="seen3">
                     <p>上传说明材料</p>  
                      <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="../../assets"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :auto-upload="false">
                            <el-button style="margin-left: 0rem;font-size:1rem" slot="trigger" size="small" type="primary">选取文件</el-button>
                            <el-button style="margin-left: 0.5rem;font-size:0.8rem"  type="success" @click="submitUpload" >确认仲裁</el-button>
                            <div slot="tip" class="el-upload__tip"></div>
                            </el-upload>    
                    </div>        
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
            </el-row>
        </div>
        <br><hr>
        <div><br>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
              <p>附：参与仲裁专家</p>
              <div style="text-align:center"> 
               <el-table
                :data="tableData"
                
                >
                <el-table-column  class="g"
                fixed="left"
                prop="name"
                label="姓名"
                width="120rem">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="联系方式"
                width="280rem">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="编号"
                width="280rem">
                </el-table-column>              
           </el-table>
              </div>
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
            </el-row>
        </div>
        <br><hr><br>
    </div>
    </div>
</template>
<<script>
export default {
    
    data(){
        return{
            waittingdisputingproject_id:this.$route.query.waittingdisputingproject_id,
            img1:require('../../assets/logo.png'),
            mark:4.5,
            info:null,
            radio: '',
            percentage:"40",
            seen1:true,
            seen2:true,
            seen3:false,
            jia:false,
            yi:false,
            show:false,
            form1:{
              mark:'4.5'
            },
             tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          phone:111111111111111,
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
           phone:111111111111111,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
           phone:111111111111111,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
           phone:111111111111111,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
           phone:111111111111111,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
        ]

        }
    },
    methods: {
        submitUpload() {
        this.$refs.upload.submit();
      },
      choosejia(){
        this.jia=false;
        this.yi=true;
        this.seen3=true;
        this.show=true;
      },
       chooseyi(){
        this.jia=true;
        this.yi=false;
        this.show=true;
        this.seen3=true;
      },
        
    },
    
   mounted() {   

    if(this.$route.query.type==="进度纠纷")
    {
      this.seen1=true;
      this.seen2=false;
    }else
    {
      this.seen1=false;
      this.seen2=true;
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
.f1{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    border-radius:25px 25px 10px 10px;

}
.container{
    font-size:1.4rem;
    }
.image {
    max-width: 100%;
    height: auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to 
 {
  opacity: 0;
}

  @media(max-width: 960px) {
    .f1 {
      width: 100%;
      margin: -1rem  0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    .container{
        font-size: 15px;
    }
    }
</style>
