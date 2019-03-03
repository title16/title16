<template>
    <div><br><br><br>
        <div >
            <el-row>
                <el-col :span="12">
                    <div class="companyapplytype">
                        <img src="../../assets/logo.png" class="img"><br><br><br>
                        <el-button type="primary" @click="turnToCompanyApplying">注册审核</el-button> <br><br><br><br><br><br>
                    </div>                  
                </el-col>
                <el-col :span="12">
                    <div class="companyapplytype">
                       <img src="../../assets/logo2.png" class="img"><br><br><br>
                       <el-button type="primary" @click="turnToCompanyModify">修改审核</el-button><br><br><br><br><br><br>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'companyapply',
    data(){
        return{
             company_id:this.$route.query.company_id,
             company_name:this.$route.query.company_name,
        }
    },
    methods:{
        turnToCompanyApplying:function(){
            this.$router.push({
                path:'/managerafterlogin/companyapplying',
                query:{
                     manager_id:this.$route.query.manager_id,
                     company_id:this.$route.query.company_id,
                     company_name:this.$route.query.company_name,
                }
            });
            this.$router.go(0);
        },
         turnToCompanyModify:function(){
            this.$router.push({
                path:'/managerafterlogin/companymodify',
                query:{
                     company_id:this.$route.query.company_id,
                     company_name:this.$route.query.company_name,
                      manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
        },
    },
}
</script>
<style>
.companyapplytype{
    background-color:rgba(255, 255, 255, 0);
    text-align: center;
    margin: 5rem;
}

  @media(max-width: 400px) {
   .companyapplytype{
    background-color:rgba(255, 255, 255, 0);
    text-align: center;
    margin: 1rem;
    }
    .img{
        width:80%;
    }
    }
</style>
