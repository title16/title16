<template>
    <div id="app">
        <br><br><br><br>
        <div class="f">
            <el-row>
                <el-col span="8" :xs="12" :sm="12" :md="12" :lg="12" :xl="12"></el-col>
                <el-col span="8" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <el-form ref="form" :model="expertmodify_form" label-width="150px">
                        <br>
                        <el-form-item label="修改密码">
                            <el-input v-model="expertmodify_form.expert_new_password" ></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" >
                            <el-input v-model="expertmodify_form.expert_new_code_confirmed" ></el-input>
                        </el-form-item>
                        <el-form-item label="修改电话" >
                            <el-input v-model="expertmodify_form.expert_new_tel" ></el-input>
                        </el-form-item>
                        <!-- <el-form-item label="修改邮箱" >
                            <el-input v-model="expertmodify_form.expert_new_email" ></el-input>
                        </el-form-item> -->
                        <el-form-item label="修改支付宝账户" >
                            <el-input v-model="expertmodify_form.expert_new_aliPay" ></el-input>
                        </el-form-item>
                        <el-button @click="">确定</el-button>
                        <br><br>
                    </el-form>
                </el-col>
                <el-col span="8">
                    <br><br>
                    <span>专家编号：{{expert_id}}</span><br><br>
                    <span>专家名：{{expert_name}}</span><br>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'expertmodify', 
    data(){
        return{
            expert_id:this.$route.query.expert_id,
            expert_name:this.$route.query.expert_name,

            expertmodify_form:[
                {
                    expert_new_password:'',
                    expert_new_code_confirmed:'',
                    expert_new_tel:'',
                    expert_new_email:'',
                    expert_new_aliPay:'',
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
