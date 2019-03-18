<template>
    <div id="app">
        <br><br><br><br>
        <div class="f">
            <el-row>
                <el-col span="8" :xs="12" :sm="12" :md="12" :lg="12" :xl="12"></el-col>
                <el-col span="8" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form ref="form" :model="studiomodify_form" label-width="150px">
                        <br>
                        <el-form-item label="修改密码">
                            <el-input v-model="studiomodify_form.studio_new_password" ></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" >
                            <el-input v-model="studiomodify_form.studio_new_code_confirmed" ></el-input>
                        </el-form-item>
                        <el-form-item label="修改电话" >
                            <el-input v-model="studiomodify_form.studio_new_tel" ></el-input>
                        </el-form-item>
                        <el-form-item label="修改邮箱" >
                            <el-input v-model="studiomodify_form.studio_new_email" ></el-input>
                        </el-form-item>
                        <el-form-item label="修改支付宝账户" >
                            <el-input v-model="studiomodify_form.studio_new_aliPay" ></el-input>
                        </el-form-item>
                        <el-button @click="">确定</el-button>
                        <br><br>
                    </el-form>
                </el-col>
                <el-col span="8">
                    <br><br>
                    <span>工作室编号：{{studio_id}}</span><br><br>
                    <span>工作室名：{{studio_name}}</span><br>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'studiomodify', 
    data(){
        return{
            studio_id:this.$route.query.studio_id,
            studio_name:this.$route.query.studio_name,

            studiomodify_form:[
                {
                    studio_new_password:'',
                    studio_new_code_confirmed:'',
                    studio_new_tel:'',
                    studio_new_email:'',
                    studio_new_aliPay:'',
                },
            ]
        }
    },
    methods:{

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

}
</style>
