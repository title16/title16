<template>
    <div><br><br><br>
        <div class="page" >
            <el-tabs type="border-card"  v-model="activeName" @tab-click="change">
                <el-tab-pane label="项目广告位管理" name="projectsadvertisementmanagement">
                    <router-view></router-view>
                </el-tab-pane>
                <el-tab-pane label="工作室广告位管理" name="studiosadvertisementmanagement">
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
            activeName:'projectsadvertisementmanagement'
        }
    },

    components:{

    },
    methods:{
        change(tab, event){
          if(this.activeName == 'projectsadvertisementmanagement'){
             this.$router.push({
                path:'/managerafterlogin/advertisementmanagement/projectsadvertisementmanagement',
                query:{
                    manager_id:this.$route.query.manager_id
                }
            });
                
          }
          else if(this.activeName =='studiosadvertisementmanagement')
          {
             this.$router.push({
                path:'/managerafterlogin/advertisementmanagement/studiosadvertisementmanagement',
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
