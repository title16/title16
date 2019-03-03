<template>
    <div>
        <br><br><br><br> 
        <div class="f"><br>
            <div >
            <el-row >
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
                <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="14">
                    <p style="">工作室成员如下</p>
                    <div style="">
                    <el-table
                        :data="tableData"
                        style="width:100%"
                         max-height="400"
                       >
                       
                        <el-table-column
                       
                        prop="name"
                        label="姓名"
                       >                    
                        </el-table-column>
                         <el-table-column                     
                        prop="zip"
                        label="联系方式"
                       >                    
                        </el-table-column>
                        <el-table-column
                        
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData)"
                            type="text"
                            size="small">
                            移除
                            </el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    </div><hr><br>
                   <div id="example-2">
                    <el-button @click="show = !show" style="float:left;margin-left:0.8rem"> 添加成员</el-button><br><br>
                    <transition name="bounce">
                      <div v-if="show"> 
                        <el-form :model="form2" status-icon :rules="rules" ref="form2" label-width="100px" class="demo-ruleForm" style="margin-right:0.8rem">
                          <el-form-item label="姓名" prop="name">
                            <el-input type="text" v-model="form2.name" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="联系方式" prop="tel">
                            <el-input type="text" v-model="form2.tel" autocomplete="off"></el-input>
                          </el-form-item>
                          <el-form-item label="年龄" prop="age">
                            <el-input v-model.number="form2.age"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="submitform">提交</el-button>
                      
                          </el-form-item>
                        </el-form>
                      </div>
                    </transition>
                  </div>
                </el-col>
                <el-col :xs="0" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>  
                
            </el-row>
            
            </div><br><br><br><br><br><br><br>
        </div>

    </div>
</template>
<script>
export default {
    data() {
      return {
            form2: {
            name: '',
            tel: '',
            age: ''
          },
            rules:{
                name:[
                    {required:true,message:'姓名不能为空',trigger:'blur'}
                ],   
                tel:[
                    {required:true,message:'姓名不能为空',trigger:'blur'}
                ],
                age:[
                    {required:true,message:'姓名不能为空',trigger:'blur'}
                ],         
            },
           biddingproject_id:this.$route.query.biddingproject_id,
           studio_id:this.$route.query.studio_id,
           img1:require('../../assets/logo.png'),
           info:null,
           show: false,
            tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      };
    },

    methods:{
           deleteRow(index, rows) {
            rows.splice(index, 1);
          },
          submitform(){
            if(this.form2.name===''||this.form2.tel===''||this.form2.age==='')
            {
              this.$notify({
              title: '提示',
              message: '请将信息填完整！',
              type: 'warning'
            });
            }else{
                this.$router.push({
                path:'/studioafterlogin/studiomember',
                query:{
                    studio_id:this.$route.query.studio_id
                }
              })
              this.$router.go(0);
                    axios.post('http://localhost:8081/readers', {     
                  studio_id: this.studio_id,
                  project_id:this.project_id,
                  price:this.form1.price,   
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
    },

    mounted () {
      axios.get('http://localhost:8081/readers', {      //传
      id:this.$route.query.studio_id
      
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
.f{
   
    font-size:1.5rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color:#fff;
    border-radius:25px 25px 10px 10px;
    
}
.g{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
     margin-top:2rem;
    text-align: center;
    background-color:#ababab;
    height:800px
}

  @media(max-width: 960px) {
    .f {
      width: 100%;
      float: left;
      margin: 0.5rem 0 0.5rem 0;
      font-size:18px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
    .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
