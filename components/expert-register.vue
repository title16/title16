<template>
<div>
    <img src="../assets/logo.png">
    <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light">
            <el-form ref="form" :model="expertRegisterform" label-width="80px">
                <p>欢迎注册</p>
                <br>
                 <el-form-item label="用户名">
                    <el-input v-model="expertRegisterform.expert_username" placeholder="用户名用文字或英文组成"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input v-model="expertRegisterform.expert_code" placeholder="密码" type="password"></el-input>
                </el-form-item>

                <el-form-item label="确认密码">
                    <el-input v-model="expertRegisterform.expert_code_confirmed" placeholder="确认密码" type="password"></el-input>
                </el-form-item>

                <el-form-item label="真实姓名">
                    <el-input v-model="expertRegisterform.expert_name" placeholder="请填写您的真实姓名" ></el-input>
                </el-form-item>

                <el-form-item label="身份证">
                    <el-input v-model="expertRegisterform.expert_id" placeholder="请填写您的身份证号码" ></el-input>
                </el-form-item>

                <el-form-item label="手机号码">
                    <el-input v-model="expertRegisterform.expert_email" placeholder="请填写您的邮箱账号" ></el-input>
                </el-form-item>

                <el-form-item label="支付宝">
                    <el-input v-model="expertRegisterform.expert_account" placeholder="请填写您的支付宝账号" ></el-input>
                </el-form-item>

                <el-form-item label="上传证件">
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

                <el-row>
                    <el-col :span="8"><div class="grid-content bg-purple">
                        </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">
                        <el-button @click="expertRegister" type="primary"> 注册</el-button></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                </el-row>


            </el-form>
               

            </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!--页尾-->
    <thefooter></thefooter>
</div>
</template>
<script>
import axios from 'axios'
import thefooter from '../components/footer.vue'

export default {
    name:'expert-register',
    data(){
        return{
            fileList: [],

        expertRegisterform:{
            expert_username:'',
            expert_code:'',
            expert_code_confirmed:'',
            expert_name:'',
            expert_id:'',
            expert_tel:'',
            expert_email:'',
            expert_account:'',

        },

        }
    },
    components:{
        'thefooter':thefooter,
    },
    methods:{
        expertRegister(){

        },

        submitUpload() {
            this.$refs.upload.submit();
        },

        handleRemove(file, fileList) {
            console.log(file, fileList);
        },

        handlePreview(file) {
            console.log(file);
        },
    }
}
</script>
<style>

</style>
