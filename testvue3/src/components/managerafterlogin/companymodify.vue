<template>
    <div id="app">
        <br><br><br><br>
        <div class="f">
            <el-row>
                <el-col span="8" :xs="12" :sm="12" :md="12" :lg="12" :xl="12"></el-col>
                <el-col span="8" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form ref="form" :model="companymodify_form" label-width="150px">
                        <br>
                        <el-form-item label="修改密码">
                            <el-input v-model="companymodify_form.company_new_password" ></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" >
                            <el-input v-model="companymodify_form.company_new_code_confirmed" ></el-input>
                        </el-form-item>
                        <el-form-item label="修改电话" >
                            <el-input v-model="companymodify_form.company_new_tel" ></el-input>
                        </el-form-item>
                        <el-form-item label="修改邮箱" >
                            <el-input v-model="companymodify_form.company_new_email" ></el-input>
                        </el-form-item>
                        <el-form-item label="修改支付宝账户" >
                            <el-input v-model="companymodify_form.company_new_aliPay" ></el-input>
                        </el-form-item>
                        <el-button @click="">确定</el-button>
                        <br><br>
                    </el-form>
                </el-col>
                <el-col span="8">
                    <br><br>
                    <span>公司编号：{{company_id}}</span><br><br>
                    <span>公司名：{{company_name}}</span><br>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'companymodify', 
    data(){
        return{
            company_id:this.$route.query.company_id,
            company_name:this.$route.query.company_name,

            companymodify_form:[
                {
                    company_new_password:'',
                    company_new_code_confirmed:'',
                    company_new_tel:'',
                    company_new_email:'',
                    company_new_aliPay:'',
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
