<template>
    <div id="app">
  <div  v-if="seen1">
    <img src="../assets/logo.png">
    <!-- <router-view/> -->
 
    <!--
      公司注册界面
      第一界面：
    -->

    <el-row type="flex" justify="center">
          <!--将登陆注册界面分成3列-->
      <el-col :span="8"><div class="grid-content "></div></el-col>
      <el-col :span="8"><div class="grid-content ">
        <p>欢迎注册</p>
        <p>(工作室注册共两步，第一步)</p>
        <br>
        <el-input v-model="StudioRegisterform.studio_username" placeholder="用户名用文字或英文组成"></el-input>
        <br>
        <br>
        <el-input v-model="StudioRegisterform.studio_code" placeholder="密码" type="password"></el-input>
        <br>
        <br>
        <el-input v-model="StudioRegisterform.studio_code_comfirmed" placeholder="确认密码" type="password"></el-input>
        <br>
        <br>
        <el-input v-model="StudioRegisterform.tel" placeholder="请输入手机号码" ></el-input>
        <br>
        <br>
        <!--
          手机号码输入框长度需要比别的输入框小，而单纯地改变width宽度，element框架无法实现左对齐前提下的宽度缩小
          解决方法，放入一个row 分成3列，手机输入栏放在左边一栏中。
        -->
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple">
              <el-input v-model="StudioRegisterform.studio_verification" placeholder="短信验证码" class="el-input-295px" ></el-input>

            </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
         <el-button  type="primary" size="small">  获取手机验证码</el-button>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple">
            </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">
              <el-button @click="enterNextRegisterPage" type="primary"> 完善工作室信息</el-button></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        </div>
        </el-col>
      <el-col :span="8"><div class="grid-content "></div></el-col>
    </el-row>
   
  </div>

    <div  v-if="seen2">
    <img src="../assets/logo.png">
    <!--
      公司注册界面
      第二界面：
    -->
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">
        </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">
       <p>欢迎注册</p>
       <p>(工作室注册共两步，第二步)</p>
        <el-button @click="enterPreviousRegisterPage" type="primary">返回上一步</el-button></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" justify="center">
          <!--将登陆注册界面分成3列-->
      <el-col :span="8"><div class="grid-content "></div></el-col>
      <el-col :span="8"><div class="grid-content ">
        <br>
        <el-form ref="form" :model="StudioRegisterform" label-width="80px">
        <el-form-item label="工作室">
            <el-input v-model="StudioRegisterform.studio_name" placeholder="请填写工作室名称"></el-input>
        </el-form-item>

            <el-form-item label="地址">
                <el-row>
                    <el-col :span="6"><div class="grid-content bg-purple">
                                        <el-cascader
                                          :options="options2"
                                          @active-item-change="handleItemChange"
                                          :props="props"
                                        ></el-cascader></div></el-col>
                  
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                </el-row>
                <el-input
                     type="textarea"
                     :rows="2"
                     placeholder="请输入工作室具体地址"
                     v-model="StudioRegisterform.studio_address">
                </el-input>
        </el-form-item>

         <el-form-item label="联系电话">
            <el-input v-model="StudioRegisterform.studio_tel"></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="StudioRegisterform.studio_email"></el-input>
        </el-form-item>

        <el-form-item label="营业执照">
          <el-input v-model="StudioRegisterform.studio_license" placeholder="(选填)"></el-input>
        </el-form-item>

        <el-form-item label="税号">
          <el-input v-model="StudioRegisterform.studio_taxFileNum" placeholder="(选填)"></el-input>
        </el-form-item>

        <el-form-item label="账户">
          <el-input v-model="StudioRegisterform.studio_account" placeholder='请填写工作室支付宝账户'></el-input>
        </el-form-item>

        <el-form-item label="上传证件（选填）">
                   <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip"></div>
        </el-upload>
        </el-form-item>

        </el-form>
        <br>
        <br>
      

        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple">
            </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light">
              <el-button @click="enterNextRegisterPage" type="primary"> 注册</el-button></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        </div>
        </el-col>
      <el-col :span="8"><div class="grid-content "></div></el-col>
    </el-row>
    
   
  </div>
  <!--页尾-->
  <thefooter></thefooter>
  </div>
</template>
<script>
import axios from 'axios'
import thefooter from '../components/footer2.vue'

export default {
    name:'studio-register',
    data() {
      return {
        fileList: [],
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        StudioRegisterform: {
          studio_username: '',
          studio_code:'',
          studio_code_comfirmed:'',
          tel:'',
          studio_verification:'',
          studio_name:'',
          studio_province:'',
          studio_city:'',
          studio_address:'',
          studio_tel:'',
          studio_email:'',
          studio_license:'',
          studio_taxFileNum:'',
          studio_account:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        seen1: true,
        seen2:false,
        input:'',
        textarea: '',
      };
    },
    components:{
      'thefooter':thefooter,
    },
    methods:{
        submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
        enterNextRegisterPage(){
          this.seen1=false;
          this.seen2=true;
      },
      enterPreviousRegisterPage(){
          this.seen1=true;
          this.seen2=false;
      },
       handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      },
      
  }
}
</script>
<style>
    #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-input-295px{
  width:295px
}
.el-row {
    margin-bottom: 20px;
  }
.el-row:last-child {
    margin-bottom: 0;
}  
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
