<template>
    <div><br><br><br><br>
        <div class="f">
             <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in waittingdisputingprojects" :key="item" :offset="0"  >        
     <el-card  shadow="hover"style="border-radius:25px 25px 25px 25px; opacity:1">
        <el-row>
          <el-col :span="12">
        <img src="../../assets/logo.png" class="image">
          </el-col>
           <el-col :span="12">
        <div style="padding: 14px;">
            <span>项目编号：{{item.id}}</span><br>
            <span>项目名：{{item.name}}</span><br>
            <span>类型:{{item.type}}</span><br>
            <div class="bottom clearfix">
            <el-button type="text" class="button" @click="turntowaittingdisputingdetail(index)">详情</el-button>
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
            waittingdisputingprojects:[
                {
                    id:1,
                    name:'xiangmu1',
                    type:'进度纠纷'
                },
                {
                    id:2,
                    name:'xiangmu1',
                    type:'评价纠纷'
                },
                {
                    id:3,
                    name:'xiangmu1',
                    type:'评价纠纷'
                },
                {
                    id:4,
                    name:'xiangmu1',
                    type:'进度纠纷'
                },
                {
                    id:5,
                    name:'xiangmu1',
                    type:'评价纠纷'
                }
            ]
        }
    },
    methods:{
        turntowaittingdisputingdetail:function(index){
                this.$router.push({
                path:'/expertafterlogin/waittingdisputingdetail',
                query:{
                     expert_id:this.$route.query.expert_id,               
                     waittingdisputingproject_id:this.waittingdisputingprojects[index].id,
                     type:this.waittingdisputingprojects[index].type,
                }
            });
            this.$router.go(0);
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
    background-color: rgba(255,255,255,0);
    border-radius:25px 25px 10px 10px;

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
