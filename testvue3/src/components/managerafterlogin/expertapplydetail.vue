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
                                    <span>专家编号：{{expert_id}}</span><br>
                                    <span>专家名：{{expert_name}}</span><br>
                                    <span>身份证：{{expert_idNum}}</span><br>
                                    <span>申请账户：{{expert_account}}</span><br>
                                    <span>联系电话：{{expert_tel}}</span><br>
                                    <span>支付宝账户：{{expert_aliPay}}</span><br>
                                    <span>工作室税号(选填)：{{expert_require}}</span><br>
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
   name:"expertapplydetail",
   data(){
       return{
           expert_id:this.$route.query.expert_id,
           expert_name:this.$route.query.expert_name,
           expert_idNum:this.$route.query.expert_idNum,
           expert_account:this.$route.query.expert_account,
           expert_password:this.$route.query.expert_password,
           expert_tel:this.$route.query.expert_tel,
           expert_aliPay:this.$route.query.expert_aliPay,
           expert_require:this.$route.query.expert_require,
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
