<template>
    <div><br><br><br>
        <div class="page" >
            <el-tabs type="border-card"  v-model="activeName" @tab-click="change">
                <el-tab-pane label="工作室申请" name="studioapplicationpayment">
                    <router-view></router-view>
                </el-tab-pane>
                <el-tab-pane label="平台支付历史" name="paymenthistory">
                    <router-view></router-view>
                </el-tab-pane>
                <el-tab-pane label="公司上缴历史" name="shangjiao">
                    <router-view></router-view>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
            activeName:'studioapplicationpayment'
        }
    },

    components:{

    },
    methods:{
        change(tab, event){
          if(this.activeName == 'studioapplicationpayment'){
             this.$router.push({
                path:'/managerafterlogin/costmanagement/studioapplicationpayment',
                query:{
                    manager_id:this.$route.query.manager_id
                }
            });
                
          }
          else if(this.activeName =='paymenthistory')
          {
             this.$router.push({
                path:'/managerafterlogin/costmanagement/paymenthistory',
                query:{
                    manager_id:this.$route.query.manager_id
                }
            });
               
          }else
          {
             this.$router.push({
                path:'/managerafterlogin/costmanagement/companyhandoverhistory',
                query:{
                    manager_id:this.$route.query.manager_id
                }
            });
          }
          }
    }
}
</script>
<style>
.page{
    margin: -0.7rem;
    font-size: 2rem;
}
</style>
