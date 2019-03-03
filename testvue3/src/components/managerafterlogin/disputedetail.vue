<template>
<div><br><br><br><br>
    <div class="disputedetail">
        <div>
            <el-row>
                <br>
                <el-col :span="12">
                    <br>
                    <img :src="img1" class="image">
                </el-col>
                <el-col :span="12">
                    <div>
                    <P>项目编号：{{project_id}}</P>
                    <p style="text-align:left; font-size:15px">项目名:</p>
                    <p style="text-align:left; font-size:15px">公司编号：</p>
                    <p style="text-align:left; font-size:15px">公司名：</p>
                    <p style="text-align:left; font-size:15px">工作室编号：</p>
                    <p style="text-align:left; font-size:15px">工作室名：</p>
                </div>
                </el-col>
            </el-row>
        </div>
        <hr>
        <div>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                       <p style="">分配专家</p>
                    <div style="">
                    <el-table
                        :data="tableData"
                        style="width:100%"
                         max-height="400"
                       >
                       
                        <el-table-column
                        fixed="left"
                        prop="id"
                        label="编号"
                       >                    
                        </el-table-column>
                         <el-table-column                     
                        prop="name"
                        label="姓名"
                       >                    
                        </el-table-column>
                       <el-table-column                     
                        prop="tel"
                        label="手机"
                       >                    
                        </el-table-column>
                        <el-table-column
                        
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="addRow(scope.$index, tableData)"
                            type="text"
                            size="small">
                             选择
                            </el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    </div><hr><br>



                    <div>
                        <el-badge :value="tableData2.length" class="item">
                          <p style="">已分配专家</p>
                        </el-badge>                   
                    <div style="">
                    <el-table
                        :data="tableData2"
                        style="width:100%"
                         max-height="420"
                       >
                       
                        <el-table-column
                        fixed="left"
                        prop="id"
                        label="编号"
                       >                    
                        </el-table-column>
                         <el-table-column                     
                        prop="name"
                        label="姓名"
                       >                    
                        </el-table-column>
                       <el-table-column                     
                        prop="tel"
                        label="手机"
                       >                    
                        </el-table-column>
                        <el-table-column
                        
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData2)"
                            type="text"
                            size="small">
                             移除
                            </el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    </div>
                    </div>
                    <el-button style="float:right;margin:3rem">确定</el-button>
                </el-col>  
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>    
            </el-row>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data() {
      return {
           img1:require('../../assets/logo.png'),
           info:null,
           project_id:this.$route.query.project_id,
           tableData:[
                {
                    id:1,
                    name:'康师傅',
                    tel:110
                },
                  {
                    id:2,
                    name:'康师傅',
                    tel:110
                },
                  {
                    id:3,
                    name:'康师傅',
                    tel:110
                },
                  {
                    id:4,
                    name:'康师傅',
                    tel:110
                },
                  {
                    id:5,
                    name:'康师傅',
                    tel:110
                },
                  {
                    id:6,
                    name:'康师傅',
                   tel:110
                },
                  {
                    id:7,
                    name:'康师傅',
                   tel:110
                },
            ],
            tableData2:[
            ]
      };
    },

    methods:{
        addRow(index, rows) {
            if(this.tableData2.length<5){
            this.tableData2.push(rows[index]);
            rows.splice(index, 1);  
            }else{
                this.$notify({
                title: '提示',
                message: '只能分配5名专家',
                type: 'warning'
                });
            }        
          },
        deleteRow(index, rows) {
        this.tableData.push(rows[index]);
        rows.splice(index, 1);          
        },
    },

    mounted () {
      axios.get('http://localhost:8081/readers', {      //传
      
    })
    .then(function (response) {
      console.log(response);
      this.info=response;
    })
    .catch(function (error) {
      console.log(error);
    }); 
    }
}
</script>
<style>
.disputedetail{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color:#fff;
    border-radius:25px 25px 10px 10px;
}
  @media(max-width: 960px) {
    .disputedetail {
      width: 100%;
      float: left;
      margin: -1rem  0 0.5rem 0;
      font-size:18px;
      text-align: center;
      height: 5000px;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
</style>
