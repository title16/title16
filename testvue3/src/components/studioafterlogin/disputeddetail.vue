<template>
    <div><br><br><br><br>
    <div class="f">
         <div><br>
           <el-row >
               <el-col :span="12">
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">
                   <div style="text-align:left;"><el-tag>人力外包</el-tag><el-tag>微信小程序</el-tag></div>
                   <p style="">项目编号：{{disputedproject_id}}</p>
                   <p style="text-align:left;font-size:15px">项目名：</p>
                   <p style="text-align:left;font-size:15px">公司编号：</p>
                   <p style="text-align:left;font-size:15px">公司名：</p>
                   <p style="text-align:left;font-size:15px">联系方式：</p>
               </el-col>
           </el-row>
        </div><br><hr>
        <div>
            <p>您与甲方（项目发布公司）于</p>
            <p>本项目的第？进度发生争执</p>
            <p>经由专家仲裁</p>
            <p>判乙方胜</p>
            <p>项目状态变为"进行中，上次审核通过"</p>
        </div><br>
        <div>
            <p>您与甲方（项目发布公司）于</p>
            <p>本项目的第？进度发生争执</p>
            <p>经由专家仲裁</p>
            <p>判甲方胜</p>
            <p>项目状态变为"停滞中"</p>
            <p></p>
        </div><br>
        <hr>
        <div>
            <el-row>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
              <p>参与仲裁专家</p>
              <div style="text-align:center"> 
               <el-table
                :data="tableData"
                
                >
                <el-table-column  class="g"
                fixed="left"
                prop="name"
                label="姓名"
                width="120rem">
                </el-table-column>
                <el-table-column
                prop="phone"
                label="联系方式"
                width="280rem">
                </el-table-column>
                <el-table-column
                prop="zip"
                label="编号"
                width="280rem">
                </el-table-column>              
           </el-table>
              </div>
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
            </el-row>
        </div>
        <br><hr><br>
    </div>
    </div>
</template>
<<script>
export default {
    
    data(){
        return{
            disputedproject_id:this.$route.query.disputedproject_id,
            img1:require('../../assets/logo.png'),
            mark:4.5,
            info:null,
            percentage:"40",
             tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          phone:111111111111111,
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
           phone:111111111111111,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
           phone:111111111111111,
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
           phone:111111111111111,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
           phone:111111111111111,
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
        ]

        }
    },
    methods: {
        submitUpload() {
        this.$refs.upload.submit();
      },
        
    },
    
   mounted() {   
    axios.get('http://localhost:8081/readers', {      
    executingproject_id:this.$route.query.executingproject_id
      
    })
    .then(function (response) {
      console.log(response);
      this.info=response;
    })
    .catch(function (error) {
      console.log(error);
    }); 
       
   },
}
</script>
<style>
.f{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    border-radius:25px 25px 10px 10px;

}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .f {
      width: 100%;
      margin: -1rem  0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
</style>
