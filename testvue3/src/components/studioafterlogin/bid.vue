<template>
    <div>  <br><br><br><br> 
         <div class="f">
            <el-row >
                <el-col :span="12"><br>
                    <img :src="img1" class="image">
                </el-col>
                <el-col :span="12">
                    <div >
        
                      <div style="text-align:left"><el-tag>人力外包</el-tag><el-tag>微信小程序</el-tag></div>
                      <p style="text-align:left; font-size:15px">项目编号：{{project_id}}</p>
                      <p style="text-align:left; font-size:15px">项目名：</p>
                      <p style="text-align:left; font-size:15px">发布公司：</p>
                      <p style="text-align:left; font-size:15px">参考报价：</p>
                      <p style="text-align:left; font-size:15px">您的竞价：</p>
                      <el-form :model="form1" :rules="rules">
                      <el-form-item prop="price"  >
                      <el-input style="width:80%"
                        placeholder="请输入竞价"
                        v-model="form1.price"
                        type="number"
                        clearable>
                     </el-input>
                      </el-form-item>
                      </el-form><br><br>
                      <el-button style="float:right; font-size:15px;margin-right:5rem" @click="bid">确定</el-button>
                    </div>
                </el-col>
            </el-row>
            <hr>
            </div>
            <div><br>
            <el-row>
                <el-col :span="3">
                    <p style="font-size:15px"> </p>
                </el-col>
                  <el-col :span="18">
                    <p style="font-size:15px"></p>
                </el-col>
                  <el-col :span="3">
                    <p style="font-size:15px"></p>
                </el-col>
                
            </el-row>
            </div>
    </div>
</template>
<script>
export default {
     data() {

      return {
           project_id:this.$route.query.project_id,
           studio_id:this.$route.query.studio_id,
           form1:{ 
             price:''
             },
           img1:require('../../assets/logo.png'),
           info:null,
           rules:{
                price:[
                    {required:true,message:'竞价不能为空',trigger:'blur'}
                ],            
            },
          
      }
      
    },
    methods:{
        bid:function(){  
         if(this.form1.price==="")
         {
          this.$notify({
          title: '提示',
          message: '竞价不能为空！',
          type: 'warning'
        });
         }else{
         this.$router.push({
                path:'/studioafterlogin/project',
                query:{
                     studio_id:this.$route.query.studio_id,
                    
                }
            });
          this.$notify({
          title: '成功',
          message: '您已投标成功',
          type: 'success'
        });
        
        }
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
.f{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    border-radius:25px 25px 10px 10px;

}
  @media(max-width: 960px) {
    .f {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:18px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }

</style>
