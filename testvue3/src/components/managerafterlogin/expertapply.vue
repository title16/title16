<template>
    <div><br><br><br>
        <div >
            <el-row>
                <el-col :span="12">
                    <div class="expertapplytype">
                        <img src="../../assets/logo.png" class="img"><br><br><br>
                        <el-button type="primary" @click="turnToExpertApplying">注册审核</el-button> <br><br><br><br><br><br>
                    </div>                  
                </el-col>
                <el-col :span="12">
                    <div class="expertapplytype">
                       <img src="../../assets/logo2.png" class="img"><br><br><br>
                       <el-button type="primary" @click="turnToExpertModify">修改审核</el-button><br><br><br><br><br><br>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'expertapply',
    data(){
        return{
             expert_id:this.$route.query.expert_id,
             expert_name:this.$route.query.expert_name,
        }
    },
    methods:{
        turnToExpertApplying:function(){
            this.$router.push({
                path:'/managerafterlogin/expertapplying',
                query:{
                     expert_id:this.$route.query.expert_id,
                     expert_name:this.$route.query.expert_name,
                      manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
        },
        turnToExpertModify:function(){
            this.$router.push({
                path:'/managerafterlogin/expertmodify',
                query:{
                     expert_id:this.$route.query.expert_id,
                     expert_name:this.$route.query.expert_name,
                      manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
        },
    },
}
</script>
<style>
.expertapplytype{
    background-color:rgba(255, 255, 255, 0);
    text-align: center;
    margin: 5rem;
}

  @media(max-width: 400px) {
   .expertapplytype{
    background-color:rgba(255, 255, 255, 0);
    text-align: center;
    margin: 1rem;
    }
    .img{
        width:80%;
    }
    }
</style>
