<template>
    <div>
        <div class="modifyprojectsadvertisement">
            <div >
            <el-row >
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                    <p style="">上缴广告费的项目如下</p>
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
                        prop="com"
                        label="公司"
                       >                    
                        </el-table-column>
                       <el-table-column                     
                        prop="fees"
                        label="广告费"
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
                             添加
                            </el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    </div><hr><br>



                    <div>
                        <el-badge :value="tableData2.length" class="item">
                            当前广告位项目如下
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
                        prop="com"
                        label="公司"
                       >                    
                        </el-table-column>
                       <el-table-column                     
                        prop="fees"
                        label="广告费"
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
          
            </div><br><br><br><br><br><br><br>
        </div>
    </div>
</template>
<script>
export default {

    data(){
        return{
            tableData:[
                {
                    id:1,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:2,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:3,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:4,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:5,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:6,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:7,
                    com:'康师傅',
                    fees:100
                },
            ],
            tableData2:[
                {
                    id:8,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:9,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:10,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:11,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:12,
                    com:'康师傅',
                    fees:100
                },
                  {
                    id:13,
                    com:'康师傅',
                    fees:100
                },
            ]
          }
    },

    methods:{
        addRow(index, rows) {
            if(this.tableData2.length<6){
            this.tableData2.push(rows[index]);
            rows.splice(index, 1);  
            }else{
                this.$notify({
                title: '提示',
                message: '广告位项目最多为6条',
                type: 'warning'
                });
            }        
          },
        deleteRow(index, rows) {
        this.tableData.push(rows[index]);
        rows.splice(index, 1);          
        },
    }
}
</script>
<style>
.modifyprojectsadvertisement{
    font-size: 1.5rem;
}
@media (max-width: 960px) {
    .modifyprojectsadvertisement{
         font-size: 1rem;
    }
}
</style>
