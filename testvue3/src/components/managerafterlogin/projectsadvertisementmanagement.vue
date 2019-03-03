<template>
    <div>
      <div class="title">
        <p>当前广告位项目如下</p>
      </div>
      <div class="projectsadvertisement">
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
            <span>公司编号：{{item.name}}</span><br>
            <span>公司名：{{item.name}}</span><br>      
            <span>广告金额：{{item.count}}</span><br>       
        </div>   
        </el-col>
        </el-row>
        </el-card><br>
      </el-col>
      </el-row>
        </div>
        <div class="modify">
          <el-row>
                 <el-col :span="12">
                   <p style="margin-top:3px">系统会根据科学的公式自动整理广告位<br>不建议管理员手动修改广告位</p>
                 </el-col>
                 <el-col :span="12">
                   <el-button style="margin-top:3px" @click="turntomodifyprojectsadvertisement">修改广告位</el-button>
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
                    id:11,
                    name:'1',
                    type:'进度款',
                    count:200
                },
                {
                    id:12,
                    name:'2',
                    type:'尾款',
                    count:200
                },
                {
                    id:13,
                    name:'3',
                    type:'首款'
                },
                {
                    id:14,
                    name:'xiangmu1'
                },
                {
                    id:15,
                    name:'xiangmu1'
                }
            ]
        }
    },
    methods:{
      turntomodifyprojectsadvertisement(){
        this.$router.push({
                path:'/managerafterlogin/advertisementmanagement/modifyprojectsadvertisement',
                query:{
                    manager_id:this.$route.query.manager_id,
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
.projectsadvertisement{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
   
    border-radius:25px 25px 10px 10px;

}
.title{
  font-size: 1.5rem;
  margin-left: 5rem;
  
}
.modify{
    z-index:3;
    position:fixed;
    bottom:0;
    width:100%;
    opacity:0.8;
    background-color:antiquewhite;
    text-align: center;
    margin: 0px;
    padding:0px;
    font-size: 0.8rem;
}
.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .projectsadvertisement {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:8px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    .title{
      font-size: 0.5rem;

    }
    .modify{
      font-size: 7px;
    }
    }

</style>
