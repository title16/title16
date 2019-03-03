<template>
    <div id='app'>
        <br><br><br><br>
        <div class="f">
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item,index) in expert_applying" :key="item" :offset="0">
                     <el-card  shadow="hover">
                         <el-row>
                             <el-col :span="12">
                                <img src="../../assets/logo.png" class="image">
                             </el-col>
                             <el-col :span="12">
                                <div style="padding: 14px;">
                                    <span>专家编号：{{item.expert_id}}</span><br>
                                    <span>专家名：{{item.expert_name}}</span><br><br>
                                    <el-button @click="turnToExpertApplyingDetail(index)" size="mini">详情</el-button>
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
    name:'expertapplying',
    data(){
        return{
            expert_applying:[
                {
                    expert_id:1,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert1',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',


                },
                 {
                    expert_id:2,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert2',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
                 {
                    expert_id:3,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert3',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
                 {
                    expert_id:4,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert4',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },

                 {
                    expert_id:5,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert5',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
                 {
                    expert_id:6,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert6',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
                 {
                    expert_id:7,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert7',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
                 {
                    expert_id:8,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert8',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
                 {
                    expert_id:9,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert9',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
                 {
                    expert_id:10,
                    expert_name:'HenryShen',
                    expert_idNum:'339005199912080016',
                    expert_account:'expert10',
                    expert_password:'123',
                    expert_tel:'85192626',
                    expert_aliPay:'aliPay32543261423',
                    expert_require:'',
                },
            ]
        }
    },
    methods:{
        turnToExpertApplyingDetail:function(index){
            this.$router.push({
                path:'/managerafterlogin/expertapplydetail',
                query:{
                     expert_id:this.expert_applying[index].expert_id,
                     expert_idNum:this.expert_applying[index].expert_idNum,
                     expert_name:this.expert_applying[index].expert_name,
                     expert_account:this.expert_applying[index].expert_account,
                     expert_password:this.expert_applying[index].expert_password,
                     expert_tel:this.expert_applying[index].expert_tel,                     
                     expert_aliPay:this.expert_applying[index].expert_aliPay,
                     expert_require:this.expert_applying[index].expert_require,
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
    .image{
        width: 80%;
    }
    .el-button{
        font-size: 10px;
    }
    
}
</style>
