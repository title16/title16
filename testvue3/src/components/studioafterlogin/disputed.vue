<template>
    <div><br><br><br><br>
     <div  style="margin-right:1rem;float:right">
    </div>
        <div class="f">          
             <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in disputedprojects" :key="o" :offset="0" >        
      <el-card  shadow="hover">
        <el-row>
          <el-col :span="12">
        <img src="../../assets/logo.png" class="image">
          </el-col>
           <el-col :span="12">
        <div style="padding: 14px;">
            <span>项目编号：{{item.id}}</span><br>
            <span>项目名：{{item.name}}</span><br> 
            <span>解决时间：</span><br>            
            <span>纠纷已解决</span><br>
            <div class="bottom clearfix">
            <el-button type="text" class="button" @click="turntodisputeddetail(index)">详情</el-button>
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
            count:2,
            disputedprojects:[
                {
                    id:41,
                    name:'xiangmu1'
                },
                {
                    id:42,
                    name:'xiangmu1'
                },
                {
                    id:43,
                    name:'xiangmu1'
                },
                {
                    id:44,
                    name:'xiangmu1'
                },
                {
                    id:45,
                    name:'xiangmu1'
                }
            ]
        }
    },
    methods:{
        turntodisputeddetail:function(index){
                this.$router.push({
                path:'/studioafterlogin/disputeddetail',
                query:{
                     studio_id:this.$route.query.studio_id,               
                     disputedproject_id:this.disputedprojects[index].id
                }
            });
            
        },
       

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
