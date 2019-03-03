<template>
    <div><br><br><br><br>
    <div class="f2">
         <el-row>
              <el-col :xs="2" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
              <el-col :xs="20" :sm="18" :md="16" :lg="14" :xl="14">
                   <el-form ref="form" :model="expertRegisterform" label-width="80px">
                       <br>
                <p>修改手机号码</p>
                <br>

                <el-form-item label="新手机">
                    <el-input v-model="expertRegisterform.tel" placeholder="手机" type="password"></el-input>
                </el-form-item>
     
                <el-row>
                    <el-col :span="8"><div class="grid-content bg-purple">&nbsp
                        </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">
                        <el-button @click="expertRegister" type="primary">确定</el-button><br><br></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">&nbsp</div></el-col>
                </el-row>


            </el-form>

              </el-col>
              <el-col :xs="2" :sm="3" :md="4" :lg="5" :xl="5">&nbsp</el-col>
         </el-row>
    </div>
    </div>
</template>
<script>
export default {
    
    data(){
        return{
          arbitratedproject_id:this.$route.query.arbitrateprojects_id,
          expertRegisterform:{
            expert_username:'',
            tel:'',
        },


        }
    },
    methods: {
        submitUpload() {
        this.$refs.upload.submit();
      },
        
    },
    
   mounted() {   
    axios.get('http://localhost:8081/readers', {      
      
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
.f2{
   
    font-size:2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    background-color: white;
    border-radius:25px 25px 10px 10px;

}
.container{
    font-size:1.4rem;
    }
.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .f2 {
      width: 100%;
      margin: -1rem  0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    .container{
        font-size: 15px;
    }
    }
</style>
