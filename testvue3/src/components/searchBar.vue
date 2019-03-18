<template>
    <div id="app">
        <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="7" :lg="7" :xl="7">&nbsp{{radio1}}{{radio2}}{{radio3}}{{radio4}}{{radio5}}</el-col>
            <el-col :xs="2" :sm="2" :md="6" :lg="6" :xl="6">&nbsp</el-col>
            <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                <div>
                    <el-input
                        placeholder="请输入内容"
                        v-model="inputSearchContent"
                        clearable
                        suffix-icon="el-icon-search">   
                    </el-input>       
                </div>
            </el-col>
            <el-col :xs="5" :sm="5" :md="3" :lg="3" :xl="3"><el-button>搜索</el-button></el-col>
            <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2">&nbsp</el-col>
        </el-row>
        <br><br><br>

        <el-button round @click="seen=true">搜索过滤搜索</el-button>
        <el-dialog title="条件搜索" :visible.sync="seen">
            <div>
                <el-row>
                    <el-col :span="2"><p>技术类型</p></el-col>
                     <el-col :span="19"><div>
                        <el-radio-group v-model="radio1">
                            <el-radio-button label="">不限</el-radio-button>
                            <el-radio-button label="微信小程序"></el-radio-button>
                            <el-radio-button label="App开发"></el-radio-button>
                            <el-radio-button label="网页制作"></el-radio-button>
                            <el-radio-button label="JAVA"></el-radio-button>
                            <el-radio-button label="C语言"></el-radio-button>
                            <el-radio-button label="人工智能"></el-radio-button>
                            <el-radio-button label="数据库"></el-radio-button>
                        </el-radio-group>
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="2"><p>外包类型</p></el-col>
                        <el-col :span="19"><div>
                            <el-radio-group v-model="radio2">
                                <el-radio-button label="">不限</el-radio-button>
                                <el-radio-button label="项目外包"></el-radio-button>
                                <el-radio-button label="人力外包"></el-radio-button>
                            </el-radio-group>
                    </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="2"><p>工作区域</p></el-col>
                        <el-col :span="19"><div>
                            <el-radio-group v-model="radio3">
                                <el-radio-button label="">不限</el-radio-button>
                                <el-radio-button label="浙江">浙江</el-radio-button>
                                <el-radio-button label="江苏">江苏</el-radio-button>
                                <el-radio-button label="福建">福建</el-radio-button>
                                <el-radio-button label="山东">山东</el-radio-button>
                                <el-radio-button label="广东">广东</el-radio-button>
                            </el-radio-group>
                        </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="2"><p>项目预算</p></el-col>
                        <el-col :span="19"><div>
                            <el-radio-group v-model="radio4">
                                <el-radio-button label="">不限</el-radio-button>
                                <el-radio-button label="5万以内">5万以内</el-radio-button>
                                <el-radio-button label="5-10万">5-10万</el-radio-button>
                                <el-radio-button label="10万以上">10万以上</el-radio-button>
                            </el-radio-group>
                        </div></el-col>
                </el-row>
                <el-row>
                    <el-col :span="2"><p>发布时间</p></el-col>
                        <el-col :span="19"><div>
                            <el-radio-group v-model="radio5">
                                <el-radio-button label="">不限</el-radio-button>
                                <el-radio-button label="1周内">1周内</el-radio-button>
                                <el-radio-button label="2周内">2周内</el-radio-button>
                                <el-radio-button label="1个月内">1个月内</el-radio-button>
                                <el-radio-button label="3个月内">3个月内</el-radio-button>
                                <el-radio-button label="6个月内">6个月内</el-radio-button>
                            </el-radio-group>
                        </div></el-col>
                </el-row>
                 <el-row>
                    <el-col :span="12"><p></p></el-col>
                    <el-col :span="12">
                    <div>
                        <el-button type="primary"  @click="doFilter">按选择条件搜索</el-button>
                    </div>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>

        <div>
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="item in tableDataEnd" :key="o" :offset="1" >        
            <el-card  shadow="hover">
                <el-row>
                    <el-col :span="12">
                        <img src="../assets/logo.png" class="image">
                    </el-col>
                    <el-col :span="12">
                        <div style="padding: 14px;">
                            <span>项目编号：{{item.id}}</span><br>
                            <span>项目名称：{{item.name}}</span><br>
                            <span>技术类型：{{item.skill}}</span>
                            <span>外包类型：{{item.type}}</span>
                            <span>发布时间：{{item.time}}</span>
                            <span>截止时间：{{item.endtime}}</span>
                            <span>参考报价：{{item.infoQuote}}</span>
                            <span>目前竞标人数：{{item.bidNumber}}</span>
                            <div class="bottom clearfix">
                                <el-button type="text" class="button">详情</el-button>
                            </div>       
                        </div>   
                    </el-col>
                </el-row>
        </el-card>
        </el-col>
    </el-row>
     <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems">
    </el-pagination>
   </div>

    </div>
</template>
<script>
    import axios from 'axios'

    // const skillOptions=['软件开发','APP开发','网站开发','游戏开发','微信开发','移动应用开发','行业解决方案','创意设计','技术服务'];
    // const typeOptions=['项目','人才'];
    // const areaOptions=['北京','上海','深圳','杭州','广州','南京','天津','重庆'];
    // const priceOptions=['5万以下','5-10万','10万以上'];
    // const timeOptions=['3天内','1周内','一个月内','3个月内','半年内','1年内'];
export default {
    name:'searchBar',
    data(){
        return{
            inputSearchContent:'',
            seen:false,
            radio1:'',
            radio2:'',
            radio3:'',
            radio4:'',
            radio5:'',

   
            radioType:'1',
            radioArea:'',

            tableDataBegin:[
                {
                    id:1,
                    name:'项目1',
                    skill:'APP开发',
                    type:'项目',
                    infoQuote:'2万',
                    time:'2019.1.1',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:2,
                    name:'项目2',
                    skill:'APP开发',
                    type:'项目',
                    infoQuote:'3万',
                    time:'2019.1.3',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:3,
                    name:'项目3',
                    skill:'APP开发',
                    type:'项目',
                    infoQuote:'4万',
                    time:'2019.1.13',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:4,
                    name:'项目4',
                    skill:'微信开发',
                    type:'项目',
                    infoQuote:'2万',
                    time:'2019.2.1',
                    endtime:'2019.4.1',
                    bidNumber:1,
                },
                {
                    id:5,
                    name:'项目5',
                    skill:'移动应用开发',
                    type:'项目',
                    infoQuote:'3万',
                    time:'2019.3.1',
                    endtime:'2019.6.1',
                    bidNumber:3,
                },
                {
                    id:6,
                    name:'项目6',
                    skill:'移动应用开发',
                    type:'人才',
                    infoQuote:'2万',
                    time:'2019.1.2',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:7,
                    name:'项目7',
                    skill:'APP开发',
                    type:'人才',
                    infoQuote:'2万',
                    time:'2019.1.1',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:8,
                    name:'项目8',
                    skill:'大数据开发',
                    type:'人才',
                    infoQuote:'2万',
                    time:'2019.1.1',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:9,
                    name:'项目9',
                    skill:'移动应用开发',
                    type:'人才',
                    infoQuote:'12万',
                    time:'2019.1.1',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:10,
                    name:'项目10',
                    skill:'APP开发',
                    type:'人才',
                    infoQuote:'8万',
                    time:'2019.1.1',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:11,
                    name:'项目11',
                    skill:'APP开发',
                    type:'项目',
                    infoQuote:'22万',
                    time:'2019.1.1',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
                {
                    id:12,
                    name:'项目12',
                    skill:'APP开发',
                    type:'项目',
                    infoQuote:'21万',
                    time:'2019.1.1',
                    endtime:'2019.2.1',
                    bidNumber:1,
                },
  
            ],

            tableDataName: "",
            tableDataEnd: [],
            currentPage: 4,
            pageSize: 2,
            totalItems: 0,
            filterTableDataEnd:[],
            flag:false
        }
    },
     created() {
        this.totalItems = this.tableDataBegin.length;
        if (this.totalItems > this.pageSize) {
            for (let index = 0; index < this.pageSize; index++) {
                this.tableDataEnd.push(this.tableDataBegin[index]);
            }
        // this.tableDataEnd = this.tableDataBegin;
        } else {
            this.tableDataEnd = this.tableDataBegin;
            }
    },
    methods:{
         handleCheckAllChange_Skills(val) {
            this.checkedSkills = val ? skillOptions : [];
            this.isIndeterminate_skill = false;
      },
        handleCheckedSkillsChange(value) {
            let checkedCount = value.length;
            this.checkAll_skill = checkedCount === this.skills.length;
            this.isIndeterminate_skill = checkedCount > 0 && checkedCount < this.skills.length;
      },

        handleCheckAllChange_Types(val) {
            this.checkedTypes = val ? typeOptions : [];
            this.isIndeterminate_type = false;
      },
        handleCheckedTypesChange(value) {
            let checkedCount = value.length;
            this.checkAll_type = checkedCount === this.types.length;
            this.isIndeterminate_type = checkedCount > 0 && checkedCount < this.types.length;
      },

        handleCheckAllChange_Areas(val) {
            this.checkedAreas = val ? areaOptions : [];
            this.isIndeterminate_area = false;
      },
        handleCheckedAreasChange(value) {
            let checkedCount = value.length;
            this.checkAll_area = checkedCount === this.areas.length;
            this.isIndeterminate_area = checkedCount > 0 && checkedCount < this.areas.length;
      },

        handleCheckAllChange_Prices(val) {
            this.checkedPrices = val ? priceOptions : [];
            this.isIndeterminate_price = false;
      },
        handleCheckedPricesChange(value) {
            let checkedCount = value.length;
            this.checkAll_area = checkedCount === this.prices.length;
            this.isIndeterminate_price = checkedCount > 0 && checkedCount < this.prices.length;
      },

        handleCheckAllChange_Times(val) {
            this.checkedTimes = val ? timeOptions : [];
            this.isIndeterminate_time = false;
      },
        handleCheckedTimesChange(value) {
            let checkedCount = value.length;
            this.checkAll_area = checkedCount === this.times.length;
            this.isIndeterminate_time = checkedCount > 0 && checkedCount < this.times.length;
      },
        //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
        //用两个变量接收currentChangePage函数的参数
        doFilter() {
        //   if (this.tableDataName == "") {
        //   this.$message.warning("查询条件不能为空！");
        //   return;
        //   }
            this.dialogFormVisible = false;
            this.tableDataEnd = []
            //每次手动将数据置空,因为会出现多次点击搜索情况
            this.filterTableDataEnd=[]
            this.tableDataBegin.forEach((value, index) => {
            if(value.name){
                if((value.skill.indexOf(this.radio1)>=0)&&(value.time.indexOf(this.radio5)>=0)){
                    this.filterTableDataEnd.push(value)
                }
   
            }
            //   if(value.address){
            //    if(value.address.indexOf(this.radio5)>=0){
            //    this.filterTableDataEnd.push(value)
            //    }
            //   }
            });
            //页面数据改变重新统计数据数量和当前页
            this.currentPage=1
            this.totalItems=this.filterTableDataEnd.length
            //渲染表格,根据值
            this.currentChangePage(this.filterTableDataEnd)
            //页面初始化数据需要判断是否检索过
            this.flag=true
        },

        openData() {},

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.handleCurrentChange(this.currentPage);
        },

    handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        //需要判断是否检索
        if(!this.flag){
            this.currentChangePage(this.tableDataEnd)
        }else{
            this.currentChangePage(this.filterTableDataEnd)  
        }
    }, //组件自带监控当前页码

    currentChangePage(list) {
        let from = (this.currentPage - 1) * this.pageSize;
        let to = this.currentPage * this.pageSize;
        this.tableDataEnd = [];
        for (; from < to; from++) {
            if (list[from]) {
                this.tableDataEnd.push(list[from]);
            }
        }
    },
 
    },
    components:{

    }
}
</script>
<style>

</style>
