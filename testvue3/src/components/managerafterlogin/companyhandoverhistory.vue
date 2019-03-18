<template>
    <div>
        <div class="companyhandoverhisstory">
             <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in biddingprojects" :key="item" :offset="0"  >        
     <el-card  shadow="hover"style="border-radius:25px 25px 25px 25px;">
        <el-row>
          <el-col :span="12">
        <img src="../../assets/logo.png" class="image">
          </el-col>
           <el-col :span="12">
        <div style="padding: 14px;">
            <span style="margin-right:-3rem">项目编号：{{item.id}}</span>
            <span style="float:right">{{item.type}}</span><br>
            <span>工作室编号：{{item.name}}</span><br>
            <span>公司编号：{{item.name}}</span><br>      
            <span>上缴时间：</span><br>
            <el-button style="" size="mini" class="button1" type="text">进度记录</el-button>
            <div class="bottom clearfix">
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
            biddingprojects:[
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
                    name:'xiangmu1',
                    type:'首款'
                },
                {
                    id:5,
                    name:'xiangmu1',
                    type:'首款'
                }
            ]
        }
    },
    methods:{
        turntostudioapplicationpaymentdetail:function(index){
                this.$router.push({
                path:'',
                query:{

                }
            });
            
        }

    },
    mounted(){
        let timer = setInterval(()=>{
                         //每隔3秒刷新
        },10000)
        }
        
}
</script>
<style>
.companyhandoverhisstory{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;  
    border-radius:25px 25px 10px 10px;

}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .companyhandoverhisstory {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:8px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    .button1{
        font-size: 10px;
        margin:1rem;
    }
    }

</style>
