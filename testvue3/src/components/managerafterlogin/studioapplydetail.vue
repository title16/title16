<template>
    <div id="app">
        <br><br><br><br>
        <div class="f">
                <el-row>
                <el-col :span="12"></el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" >
                     <el-card  shadow="hover">
                         <el-row>
                             <el-col :span="9">
                                <img src="../../assets/logo.png" class="image">
                             </el-col>
                             <el-col :span="12">
                                <div style="padding: 14px; font-size: 1.5rem;">
                                    <span>工作室编号：{{studio_id}}</span><br>
                                    <span>工作室名：{{studio_name}}</span><br>
                                    <span>申请账户：{{studio_account}}</span><br>
                                    <span>工作室所在省份：{{provice}}</span><br>
                                    <span>城市：{{city}}</span><br>
                                    <span>地址：{{studio_address}}</span><br>
                                    <span>联系电话：{{studio_tel}}</span><br>
                                    <span>邮箱：{{studio_email}}</span><br>
                                    <span>支付宝账户：{{studio_aliPay}}</span><br>
                                    <span>工作室税号(选填)：{{studio_taxNum}}</span><br>
                                    <span>营业执照照片(选填)：？？？</span><br>
                                    <span>工作室上传图片：？？？</span><br>
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
                <el-col :span="12"></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
   name:"studioapplydetail",
   data(){
       return{
           studio_id:this.$route.query.studio_id,
           studio_name:this.$route.query.studio_name,
           studio_account:this.$route.query.studio_account,
           studio_password:this.$route.query.studio_password,
           provice:this.$route.query.provice,
           city:this.$route.query.city,
           studio_address:this.$route.query.studio_address,
           studio_tel:this.$route.query.studio_tel,
           studio_email:this.$route.query.studio_email,
           studio_aliPay:this.$route.query.studio_aliPay,
           studio_taxNum:this.$route.query.studio_taxNum,
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
@media (max-width: 960px) {
    .f{
        font-size:10px;
        margin:0.3em;
        text-align: left;
    }
    
}
</style>
