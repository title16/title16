<template>
    <div>
        <div class="studioapplicationpayment">
             <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in applicationprojects" :key="item" :offset="0"  >        
     <el-card  shadow="hover"style="border-radius:25px 25px 25px 25px;" class="card">
        <el-row>
          <el-col :span="12">
        <img src="../../assets/logo.png" class="image">
          </el-col>
           <el-col :span="12">
        <div style="padding: 14px;">
            <span>项目编号：{{item.id}}</span><br>
            <span>工作室编号：{{item.name}}</span><br>
            <span>公司编号：{{item.name}}</span><br>      
            <span>申请种类：{{item.type}}</span><br>
            <div class="bottom clearfix">
            <el-button type="text" class="button" @click="turntostudioapplicationpaymentdetail(index)">详情</el-button>
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
                    id:1,
                    name:'1',
                    type:'进度款'
                },
                {
                    id:2,
                    name:'2',
                    type:'尾款'
                },
                {
                    id:3,
                    name:'3',
                    type:'首款'
                },
                {
                    id:4,
                    name:'xiangmu1'
                },
                {
                    id:5,
                    name:'xiangmu1'
                }
            ]
        }
    },
    methods:{
        turntostudioapplicationpaymentdetail:function(index){
                this.$router.push({
                path:'/managerafterlogin/costmanagement/applicationpaymentdetail',
                query:{
                    manager_id:this.$route.query.manager_id,
                    applicationproject_id:this.applicationprojects[index].id
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
.studioapplicationpayment{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center; 
    border-radius:25px 25px 10px 10px;
    
}
.card{
     border-color: rgba(0, 191, 255, 0);
     border-width: 2rem;
}
.card:hover{
    border-width: 1px;
    border-color: rgba(0, 191, 255, 0.5);
}
.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .studioapplicationpayment {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:8px;
      text-align: left;
    }
    .card{
     border-color: rgba(0, 191, 255, 0);
     border-width: 0.5rem;
}
    .image {
        max-width: 80%;
        height: auto;
    }
    }

</style>
