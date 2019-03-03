<template>
    <div><br><br><br><br>
        <div class="f">
             <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in endedprojects" :key="o" :offset="0" >        
        <el-card  shadow="hover">
        <el-row>
          <el-col :span="12">
             <img src="../../assets/logo.png" class="image">
          </el-col>
           <el-col :span="12">
                <div style="padding: 14px;">
                    <span>项目编号：{{item.id}}</span><br>
                    <span>项目名：{{item.name}}</span><br>
                    <span>已完成</span><br>
                    <div class="bottom clearfix">
                    <el-button type="text" class="button" @click="turntoendeddetail(index)">详情</el-button>
                    </div>       
                </div>   
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
            endedprojects:[
                {
                    id:21,
                    name:'xiangmu1'
                },
                {
                    id:22,
                    name:'xiangmu1'
                },
                {
                    id:23,
                    name:'xiangmu1'
                },
                {
                    id:24,
                    name:'xiangmu1'
                },
                {
                    id:25,
                    name:'xiangmu1'
                }
            ]
        }
    },
    methods:{
        turntoendeddetail:function(index){
                this.$router.push({
                path:'/companyafterlogin/endeddetail',
                query:{
                     company_id:this.$route.query.company_id,               
                     endedproject_id:this.endedprojects[index].id
                }
            });
            
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
    border-radius: 25px;
    background-color: white

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