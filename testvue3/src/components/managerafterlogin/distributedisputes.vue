<template>
    <div class="distributedisputes"><br><br><br><br>
        <div class="studioapplicationpayment">
             <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in applicationprojects" :key="item" :offset="0"  >        
     <el-card  shadow="hover"style="border-radius:25px 25px 25px 25px;">
        <el-row>
          <el-col :span="12">
        <img src="../../assets/logo.png" class="image">
          </el-col>
           <el-col :span="12">
        <div style="padding: 14px;">
            <span>项目编号：{{item.id}}</span><br>
            <span>工作室编号：{{item.com}}</span><br>
            <span>公司编号：{{item.stu}}</span><br>    
            <span>{{item.type}}</span><br> 
            <span></span>
            <div class="bottom clearfix">
            <el-button type="text" class="button" @click="turntosdisputedetail(index)">分配</el-button>
            </div>       
        </div>   
        </el-col>
        </el-row>
        </el-card><br>
    </el-col>
    </el-row>
        </div>
    </div>
</template>
<script>
export default {

    data(){
        return{
            applicationprojects:[
                {
                    id:31,
                    com:'1',
                    stu:'1',
                     type:'评价纠纷'
                },
                {
                    id:32,
                     com:'2',
                    stu:'2',
                     type:'进度纠纷'
                },
                {
                    id:33,
                     com:'3',
                    stu:'3',
                     type:'评价纠纷'
                },
                {
                    id:34,
                     com:'4',
                    stu:'4',
                     type:'进度纠纷'
                },
                {
                    id:35,
                     com:'5',
                    stu:'5',
                    type:'进度纠纷'
                }
            ]
        }
    },
    methods:{
        turntosdisputedetail:function(index){
                this.$router.push({
                path:'/managerafterlogin/disputedetail',
                query:{
                    manager_id:this.$route.query.manager_id,
                    project_id:this.applicationprojects[index].id
                }
            });
            this.$router.go(0);
        }

    },
    mounted(){
        let timer = setInterval(()=>{
                         //每隔10秒刷新
        },10000)
        }
        
}
</script>
<style>
.distributedisputes{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center; 
    background-color: rgba(255, 255, 255,0);
    border-radius:25px 25px 10px 10px;

}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .distributedisputes {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:8px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }

</style>
