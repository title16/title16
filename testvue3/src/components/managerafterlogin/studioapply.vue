<template>
    <div><br><br><br>
        <div >
            <el-row>
                <el-col :span="12">
                    <div class="studioapplytype">
                        <img src="../../assets/logo.png" class="img"><br><br><br>
                        <el-button type="primary" @click="turnToStudioApplying">注册审核</el-button> <br><br><br><br><br><br>
                    </div>                  
                </el-col>
                <el-col :span="12">
                    <div class="studioapplytype">
                       <img src="../../assets/logo2.png" class="img"><br><br><br>
                       <el-button type="primary" @click="turnToStudioModify">修改审核</el-button><br><br><br><br><br><br>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:'studioapply',
    data(){
        return{
             studio_id:this.$route.query.studio_id,
             studio_name:this.$route.query.studio_name,
        }
    },
    methods:{
        turnToStudioApplying:function(){
            this.$router.push({
                path:'/managerafterlogin/studioapplying',
                query:{
                     studio_id:this.$route.query.studio_id,
                     studio_name:this.$route.query.studio_name,
                      manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
        },
        turnToStudioModify:function(){
            this.$router.push({
                path:'/managerafterlogin/studiomodify',
                query:{
                     studio_id:this.$route.query.studio_id,
                     studio_name:this.$route.query.studio_name,
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
        },
    },
}
</script>
<style>
.studioapplytype{
    background-color:rgba(255, 255, 255, 0);
    text-align: center;
    margin: 5rem;
}

  @media(max-width: 400px) {
   .studioapplytype{
    background-color:rgba(255, 255, 255, 0);
    text-align: center;
    margin: 1rem;
    }
    .img{
        width:80%;
    }
    }
</style>
