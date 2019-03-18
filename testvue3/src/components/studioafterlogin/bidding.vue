<template>
    <div><br><br><br><br>
        <div class="studiobidding">
              <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in biddingprojects" :key="index" :offset="0"  @click="turntobiddingdetail(index)">        
                    <el-card  shadow="hover"style="border-radius:18px 18px 18px 18px;" class="studiobiddingcard">
                        <el-row>
                            <el-col :span="10">
                                   <div style="text-align:center" ><img src="../../assets/logo.png" class="image" @click="turntobiddingdetail(index)"></div>
                            </el-col>
                            <el-col :span="14" @click="turntobiddingdetail(index)">
                                    <div style="">
                                        <div style="float:left;"><el-button type="text"class="biddingitemname" @click="turntobiddingdetail(index)">{{item.name}}</el-button></div>
                                        <div style="float:right;color:#34c484;"><p>竞标中...</p></div>
                                        <div class="clear"></div>
                                        <div style="float:left"><el-tag>项目外包</el-tag><el-tag>微信小程序</el-tag></div>                                       
                                        <div class="clear"></div>
                                        <div style="margin-top:10px;"><i class="el-icon-tickets" style="font-style:italic">项目编号:{{item.id}}</i></div>    
                                        <div style="float:right;" class="jingbiao"><p>共有<i style="font-weight:bold;font-style:italic;color:red;font-size:26px">5</i>个工作室竞标</p></div> 
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
                    id:111111111,
                    name:'xiangmu1'
                },
                {
                    id:22222222,
                    name:'xiangmu1'
                },
                {
                    id:333333333,
                    name:'xiangmu1'
                },
                {
                    id:44444444,
                    name:'xiangmu1'
                },
                {
                    id:5555555,
                    name:'xiangmu1'
                }
            ]
        }
    },
    methods:{
        turntobiddingdetail:function(index){
                this.$router.push({
                path:'/studioafterlogin/biddingdetail',
                query:{
                     studio_id:this.$route.query.studio_id,               
                     biddingproject_id:this.biddingprojects[index].id
                }
            });
            
        }

    },
    mounted(){

    }
    
}
</script>
<style>
.clear{
    clear: both;
}
.studiobidding{
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;  
    border-radius:25px 25px 10px 10px;

}
.studiobiddingcard{
     border-color: rgba(0, 191, 255, 0);
     border-width: 0.5rem;
}
.studiobiddingcard:hover{
    border-width: 0.6rem;
    border-color: rgba(0, 191, 255, 0.2);
}
.image {
    max-width: 100%;
    height: auto;
    text-align: center;
}
.biddingitemname{
    font-size:30px;
    color:black;
    font-weight: bold;
}
.jingbiao{
    font-size: 18px;
}
  @media(max-width: 800px) {
    .studiobidding {
      width: 100%;
      margin: 0.5rem 0 0.2rem 0;
      font-size:14px;
      text-align: left;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    .studiobiddingcard{
     border-color: rgba(0, 191, 255, 0);
     border-width: 0rem;
    }
    .studiobiddingcard:hover{
    border-width: 1px;
    border-color: rgba(2, 36, 231, 0.8);
    }
    .biddingitemname{
    font-size:18px;
    color:black;
    font-weight: bold;
}
.jingbiao{
    font-size: 12px;
}
}

</style>
