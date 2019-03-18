<template>
    <div id='app'>
        <br><br><br><br>
        <div class="f">
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in studio_applying" :key="item" :offset="0">
                     <el-card  shadow="hover">
                         <el-row>
                             <el-col :span="12">
                                <img src="../../assets/logo.png" class="image">
                             </el-col>
                             <el-col :span="12">
                                <div style="padding: 14px;">
                                    <span>工作室编号：{{item.studio_id}}</span><br>
                                    <span>工作室名：{{item.studio_name}}</span><br><br>
                                    <el-button @click="turnToStudioApplyingDetail(index)" size="mini">详情</el-button>
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
    name:'studioapplying',
    data(){
        return{
            studio_applying:[
                {
                    studio_id:1,
                    studio_name:'工作室1',
                    studio_account:'studio1',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',


                },
                 {
                    studio_id:2,
                    studio_name:'工作室2',
                    studio_account:'studio2',
                    studio_password:'1233',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
                 {
                    studio_id:3,
                    studio_name:'工作室3',
                    studio_account:'studio3',
                    studio_password:'1234',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
                 {
                    studio_id:4,
                    studio_name:'工作室4',
                    studio_account:'studio4',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },

                 {
                    studio_id:5,
                    studio_name:'工作室5',
                    studio_account:'studio5',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
                 {
                    studio_id:6,
                    studio_name:'工作室6',
                    studio_account:'studio6',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
                 {
                    studio_id:7,
                    studio_name:'工作室7',
                    studio_account:'studio7',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
                 {
                    studio_id:8,
                    studio_name:'工作室8',
                    studio_account:'studio8',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
                 {
                    studio_id:9,
                    studio_name:'工作室9',
                    studio_account:'studio9',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
                 {
                    studio_id:10,
                    studio_name:'工作室10',
                    studio_account:'studio10',
                    studio_password:'123',
                    province:'Zhejiang',
                    city:'Hangzhou',
                    studio_address:'中国计量大学',
                    studio_tel:'85192626',
                    studio_email:'@qq.com',
                    studio_aliPay:'aliPay32543261423',
                    studio_taxNum:'taxNum34675247489093',
                },
            ]
        }
    },
    methods:{
        turnToStudioApplyingDetail:function(index){
            this.$router.push({
                path:'/managerafterlogin/studioapplydetail',
                query:{
                     
                     studio_id:this.studio_applying[index].studio_id,
                     studio_name:this.studio_applying[index].studio_name,
                     studio_account:this.studio_applying[index].studio_account,
                     studio_password:this.studio_applying[index].studio_password,
                     provice:this.studio_applying[index].province,
                     city:this.studio_applying[index].city,
                     studio_address:this.studio_applying[index].studio_address,
                     studio_tel:this.studio_applying[index].studio_tel,
                     studio_email:this.studio_applying[index].studio_email,
                     studio_aliPay:this.studio_applying[index].studio_aliPay,
                     studio_taxNum:this.studio_applying[index].studio_taxNum,
                     manager_id:this.$route.query.manager_id,
                }
            });
            this.$router.go(0);
        },

    }
}
</script>
<style>
.f{
   
    font-size:1.5rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;

}
@media (max-width: 960px) {
    .f{
        font-size:10px;
        margin:0.3em;
        text-align: left;
    }
    .el-button{
        font-size:10px;
    }
    .image{
        width:80%;
    }
    
}
</style>
