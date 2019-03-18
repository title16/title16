<template>
    <div><br><br><br><br>
        <div class="f">
             <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in executingprojects" :key="o" :offset="0" >        
      <el-card  shadow="hover">
        <el-row>
          <el-col :span="8">
            <img src="../../assets/logo.png" class="image">
          </el-col>
          <el-col :span="8">
            <div style="padding: 14px;">
              <span>项目编号：{{item.id}}</span><br>
              <span>项目名：{{item.name}}</span><br>
              <span style="color:#FF3300">{{item.state}}</span><br>
               <div class="bottom clearfix">
                 <el-button type="text" class="button" @click="turntoexecutingdetail(index)">详情</el-button>
               </div>       
            </div>   
          </el-col>
          <el-col :span="6">
                          <el-progress type="circle" :percentage="percentage" color="#CC66FF" stroke-width=15 width=200></el-progress>
            <p style="">当前进度(2/5)</p>
            <el-button type="primary">查看进度记录</el-button>
          </el-col>
        </el-row>
        </el-card>
    </el-col>
    </el-row>
        </div>
    </div>
</template>
<script>
export default {

    data(){
        return{
            percentage:50,
            executingprojects:[
                {
                    id:11,
                    name:'xiangmu1',
                    state:'待审核中',
                },
                {
                    id:12,
                    name:'xiangmu1',
                    state:'上次审核通过',
                },
                {
                    id:13,
                    name:'xiangmu1',
                    state:'上次审核不通过',
                },
                {
                    id:14,
                    name:'xiangmu1',
                    state:'仲裁中，等待专家处理',
                },
                {
                    id:15,
                    name:'xiangmu1',
                    state:'已仲裁，等待您处理',
                },
                {
                    id:16,
                    name:'xiangmu16',
                    state:'同意乙方继续',
                },
                {
                    id:17,
                    name:'xiangmu16',
                    state:'终止合同',
                },
                {
                    id:18,
                    name:'xiangmu16',
                    state:'仲裁乙方胜，请支付该进度进度款',
                },
            ]
        }
    },
    methods:{
        turntoexecutingdetail:function(index){
            this.$router.push({
                 path:'/companyafterlogin/executingdetail',
                 query:{
                     company_id:this.$route.query.company_id,
                     executingproject_id:this.executingprojects[index].id,
                     executingproject_state:this.executingprojects[index].state,
                    }

                })
        }

    },
    mounted(){

    }
    
}
</script>
<style>
.f{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white

}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .f {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:15px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }

</style>
