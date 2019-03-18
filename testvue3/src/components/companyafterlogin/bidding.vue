<template>
    <div><br><br><br><br>
        <div class="bidding">
             <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in biddingprojects" :key="item" :offset="0" >        
                    <el-card  shadow="hover" class="card1">
                        <el-row>
                            <el-col :span="12">
                                <img src="../../assets/logo.png" class="image">
                            </el-col>
                            <el-col :span="12">
                                <div style="padding: 14px;">
                                    <span>项目编号：{{item.id}}</span><br>
                                    <span>项目名：{{item.name}}</span><br>
                                    <span>已投标：{{item.num}}</span><br>
                                    <span>竞标中</span><br>
                                    <div class="bottom clearfix">
                                    <el-button type="text" class="button" @click="turntoChooseTender(index)">选择投标者</el-button>
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
                    name:'xiangmu1',
                    num:10,
                },
                {
                    id:2,
                    name:'xiangmu1',
                    num:1,
                },
                {
                    id:3,
                    name:'xiangmu1',
                    num:3,
                },
                {
                    id:4,
                    name:'xiangmu1',
                    num:6,
                },
                {
                    id:5,
                    name:'xiangmu1',
                    num:7,
                }
            ]
        }
    },
    methods:{
        turntoChooseTender:function(index){
                this.$router.push({
                path:'/companyafterlogin/choose-tender',
                query:{
                     company_id:this.$route.query.company_id,               
                     biddingproject_id:this.biddingprojects[index].id,
                     biddingproject_name:this.biddingprojects[index].name,
                     biddingproject_num:this.biddingprojects[index].num,
                }
            });
            
        }

    },
    mounted(){

    }
    
}
</script>
<style>
.bidding{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    background-color: rgba(255, 255, 255, 0);

}
.card1{
     border-color: rgba(0, 191, 255, 0);
     border-width: 0.5rem;
     border-radius: 10px;
}
.card1:hover{
    border-width: 2rem;
    border-color: rgba(0, 191, 255, 0.2);
}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .bidding {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:15px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    .card1{
     border-color: rgba(0, 191, 255, 0);
     border-width: 0rem;
    }
    .card1:hover{
    border-width: 0.2rem;
    border-color: rgba(2, 36, 231, 0.8);
    }
    }

</style>
