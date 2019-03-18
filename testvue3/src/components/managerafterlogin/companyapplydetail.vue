<template>
    <div id="app">
        <br><br><br><br>
        <div class="f">
                <el-row>
                <el-col :span="12"></el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                     <el-card  shadow="hover">
                         <el-row>
                             <el-col :span="11">
                                <img src="../../assets/logo.png" class="image">
                             </el-col>
                             <el-col :span="12">
                                <div>
                                    <span>公司编号：{{company_id}}</span><br>
                                    <span>公司名：{{company_name}}</span><br>
                                    <span>申请账户：{{company_account}}</span><br>
                                    <span>公司所在省份：{{provice}}</span><br>
                                    <span>城市：{{city}}</span><br>
                                    <span>地址：{{company_address}}</span><br>
                                    <span>联系电话：{{company_tel}}</span><br>
                                    <span>邮箱：{{company_email}}</span><br>
                                    <span>支付宝账户：{{company_aliPay}}</span><br>
                                    <span>企业税号：{{company_taxNum}}</span><br>
                                    <span>营业执照照片：？？？</span><br>
                                    <span>公司上传图片：？？？</span><br>
                                    <el-row>
                                        <el-col :span="2"></el-col>
                                        <el-col :span="15">
                                            <el-button @click="">同意</el-button>
                                        </el-col>
                                        <el-col :span="1">
                                            <el-button @click="">不同意</el-button>
                                        </el-col>
                                    </el-row>
                                    <!-- <el-button @click="">同意</el-button> -->
                                </div>
                             </el-col>
                         </el-row>
                     </el-card>
                </el-col>
                <el-col :span="1"></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
   name:"companyapplydetail",
   data(){
       return{
           company_id:this.$route.query.company_id,
           company_name:this.$route.query.company_name,
           company_account:this.$route.query.company_account,
           company_password:this.$route.query.company_password,
           provice:this.$route.query.provice,
           city:this.$route.query.city,
           company_address:this.$route.query.company_address,
           company_tel:this.$route.query.company_tel,
           company_email:this.$route.query.company_email,
           company_aliPay:this.$route.query.company_aliPay,
           company_taxNum:this.$route.query.company_taxNum,
            manager_id:this.$route.query.manager_id,
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
    text-align: left;
    background-color: white;

}
@media (max-width: 960px) {
    .f{
        font-size:10px;
        margin:0.3em;
        text-align: left;
    }
    
}
</style>
