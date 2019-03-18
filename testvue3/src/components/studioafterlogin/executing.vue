<template>
    <div><br><br><br><br>
        <!-- <div class="f">
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
              <span style="color:#FF3300">状态：{{item.state}}</span><br>
              <div class="bottom clearfix">
                <el-button type="text" class="button" @click="turntoexecutingdetail(index)">详情</el-button>
              </div>       
           </div>   
         </el-col>
         <el-col :span="6">
            <el-progress type="circle" :percentage="percentage" color="#CC66FF" stroke-width=15 width=200></el-progress>
            <p style="">当前进度(2/5)</p>
            <el-button type="primary" >查看进度记录</el-button>
          </el-col>
        </el-row>
        </el-card>
    </el-col>
    </el-row>
        </div> -->

            <div class="studioexecuting">
                <el-row>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in executingprojects" :key="o" :offset="0" >        
                    <el-card  shadow="hover"style="border-radius:18px 18px 18px 18px;" class="studioexecutingcard">
                        <el-row>
                            <el-col :span="9">
                                <div style="text-align:center" class=""><img src="../../assets/logo.png" class="image"  @click="turntoexecutingdetail(index)"></div>
                            </el-col>
                            <el-col :span="7">
                                <div style="">
                                <div ><el-button type="text" class="studioexecutingitemnamebutton" @click="turntoexecutingdetail(index)" size="mini">{{item.name}}</el-button></div><br>
                                <i class="el-icon-edit" style="float:left"><i>编号：{{item.id}}</i></i><br>
                                <i class="el-icon-time"><i>2017-6-8</i></i><br><br>
                                <!-- <div><div style="background-color:rgba(	65,105,225,0.8);float:left;border-radius:8px;"><p style="color:white;font-style:italic;font-weight:bold;margin-top:8px">NO.</p></div><p style="font-style:italic">编号：{{item.id}}</p></div><br> -->
                                <div style="box-shadow:#ff0000 0px 0px 3px;border-radius:5px;display: inline-block;"><i class="el-icon-bell" style="color:#FF3300"><span>{{item.state}}</span></i></div>       
                            </div>   
                            </el-col>
                            <el-col :span="8" style=" position: relative;">
                                <div class="executingprogress">
                                    <el-progress type="circle" :percentage="percentage" color="	#FF8C00" stroke-width=10 width=100></el-progress>
                                    <el-button type="text" class="fontbutton1">当前进度(2/5)</el-button>
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
            percentage:5,
            executingprojects:[
                {
                    id:11111111111,
                    name:'xiangmu1',
                    state:'审核中'
                },
                {
                    id:122222222,
                    name:'xiangmu1',
                    state:'进行中，上次审核通过'
                    
                },
                {
                    id:133333333,
                    name:'xiangmu1',
                    state:'进行中，进度款申请中'
                },
                {
                    id:1444444444,
                    name:'xiangmu1',
                    state:'进行中，进度款申请成功'
                },
                 {
                    id:1555555555,
                    name:'xiangmu1',
                    state:'进行中，上次审核失败'
                },
                {
                    id:166666666,
                    name:'xiangmu1',
                    state:'仲裁中，等待专家处理'
                },
                {
                    id:1777777777,
                    name:'xiangmu1',
                    state:'已仲裁，等待甲方处理'
                },
                  {
                    id:18888888888,
                    name:'xiangmu1',
                    state:'进行中，甲方同意继续'
                }
                
            ]
        }
    },
    methods:{
        turntoexecutingdetail:function(index){
            this.$router.push({
                 path:'/studioafterlogin/executingdetail',
                 query:{
                     studio_id:this.$route.query.studio_id,
                     executingproject_id:this.executingprojects[index].id,
                     executingproject_state:this.executingprojects[index].state,
                     executingproject_name:this.executingprojects[index].name
                    }

                })
            this.$router.go(0);
        }

    },
    mounted(){

    }
    
}
</script>
<style>
.studioexecuting{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: left;
    background-color: rgba(25,65,233,0);

}
.clear{
    clear: both;
}
.image {
    max-width: 100%;
    height: auto;
}
.studioexecutingitemnamebutton{
    font-size: 24px;
    color: #4186dc;
}
.executingprogress{
    margin-top:45px;
    margin-left: 20px;
}
  @media(max-width: 740px) {
    .studioexecuting {
      width: 100%;
      margin: 0.4rem 0 0.4rem 0;
      font-size:14px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
        margin-top:20px;
    }
    .studioexecutingitemnamebutton{
    font-size: 16px;
    color: #4186dc;
    }
    .fontbutton1{
        font-size: 14px;
    }
    .executingprogress{
    margin-top:10px;
    margin-left:5px;
    }
    }

</style>
