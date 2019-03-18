<template>
  <div id="app" style=""><br>
    <div>
     <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="7" :lg="7" :xl="7">&nbsp{{radio1}}{{radio2}}{{radio3}}{{radio4}}{{radio5}}</el-col>
        <el-col :xs="2" :sm="2" :md="6" :lg="6" :xl="6">&nbsp</el-col>
        <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
            <div>
              <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable
                suffix-icon="el-icon-search">   
                 </el-input>       
            </div>
        </el-col>
     <el-col :xs="5" :sm="5" :md="3" :lg="3" :xl="3"><el-button>搜索</el-button></el-col>
     <el-col :xs="1" :sm="1" :md="2" :lg="2" :xl="2">&nbsp</el-col>
   </el-row>
    <br><br><br>

<el-button type="text" @click="dialogFormVisible = true">条件过滤搜索</el-button>
 <el-dialog title="条件搜索" :visible.sync="dialogFormVisible">
 <el-row>
  <el-col :span="5"><p>类型</p></el-col>
  <el-col :span="19"><div>
       <el-radio-group v-model="radio1">
      <el-radio-button label="">不限</el-radio-button>
      <el-radio-button label="微信小程序"></el-radio-button>
      <el-radio-button label="手机APP"></el-radio-button>
      <el-radio-button label="网页制作"></el-radio-button>
       <el-radio-button label="JAVA"></el-radio-button>
      <el-radio-button label="C语言"></el-radio-button>
      <el-radio-button label="人工智能"></el-radio-button>
      <el-radio-button label="数据库"></el-radio-button>
    </el-radio-group>
      </div></el-col>
</el-row>
<el-row>
  <el-col :span="5"><p>外包类型</p></el-col>
  <el-col :span="19"><div>
       <el-radio-group v-model="radio2">
      <el-radio-button label="">不限</el-radio-button>
      <el-radio-button label="项目外包"></el-radio-button>
      <el-radio-button label="人力外包"></el-radio-button>
    </el-radio-group>
      </div></el-col>
</el-row>
<el-row>
  <el-col :span="5"><p>工作室规模</p></el-col>
  <el-col :span="19"><div>
       <el-radio-group v-model="radio3">
      <el-radio-button label="">不限</el-radio-button>
      <el-radio-button label="5">5人以下</el-radio-button>
      <el-radio-button label="15">5~15人</el-radio-button>
      <el-radio-button label="16">15人以上</el-radio-button>
    </el-radio-group>
      </div></el-col>
</el-row>
<el-row>
  <el-col :span="5"><p>星级评价</p></el-col>
  <el-col :span="19"><div>
       <el-radio-group v-model="radio4">
      <el-radio-button label="1">1星</el-radio-button>
      <el-radio-button label="2">2星</el-radio-button>
      <el-radio-button label="3">3星</el-radio-button>
      <el-radio-button label="4">4星</el-radio-button>
      <el-radio-button label="5">5星</el-radio-button>
    </el-radio-group>
      </div></el-col>
</el-row>
<el-row>
  <el-col :span="5"><p>工作区域</p></el-col>
  <el-col :span="19"><div>
       <el-radio-group v-model="radio5">
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
  <el-col :span="12"><p></p></el-col>
  <el-col :span="12">
      <div>
          <el-button type="primary"  @click="doFilter">按选择条件搜索</el-button>
      </div>
      </el-col>
</el-row>
</el-dialog>

   <br>
   </div>
   <div>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="item in tableDataEnd" :key="o" :offset="0" >        
      <el-card  shadow="hover">
        <el-row>
          <el-col :span="12">
        <img src="../assets/logo.png" class="image">
          </el-col>
           <el-col :span="12">
        <div style="padding: 14px;">
            <span>工作室id：{{item.id}}</span><br>
            <span>擅长类型：{{item.type}}</span><br>
            <span>城市：{{item.address}}</span>
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
export default {
 data() {
 return {
  dialogFormVisible: false,
  radio1:'',
  radio2:'',
  radio3:'',
  radio4:'',
  radio5:'',
  tableDataBegin: [
  {
   id:1,
   name: "王小虎",
   address: "江苏",
   type:"C语言"

  },
  {
   id:2,
   name: "王小虎",
   address: "广东",
   type:"C语言"
  },
  {
      id:3,
   date: "2016-05-03",
   name: "王二虎",
   address: "江苏",
   type:"C语言"
  },
  {
      id:4,
   date: "2016-05-04",
   name: "王二虎",
   address: "浙江",
   type:"C语言"
  },
  {
     id:5,
   date: "2016-05-05",
   name: "王三虎",
   address: "广东",
   type:"JAVA"
  },
  {
      id:6,
   date: "2016-05-06",
   name: "王三虎",
   address: "江苏",
   type:"JAVA"
  },
  {
      id:7,
   date: "2016-05-07",
   name: "王小虎",
   address: "浙江",
   type:"JAVA"
  },
  {
      id:8,
   date: "2016-05-08",
   name: "王小虎",
   address: "浙江",
   type:"人工智能"
  },
  {
      id:9,
   date: "2016-05-01",
   name: "王小虎",
   address: "山东",
   type:"数据库"
  },
  {
     id:10,
   date: "2016-05-02",
   name: "王小虎",
   address: "江苏",
   type:"网页制作"
  },
  ],
  tableDataName: "",
  tableDataEnd: [],
  currentPage: 4,
  pageSize: 2,
  totalItems: 0,
  filterTableDataEnd:[],
  flag:false
 };
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
 methods: {
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
  if(value.type){
   if((value.type.indexOf(this.radio1)>=0)&&(value.address.indexOf(this.radio5)>=0)){
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
 }
 }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
