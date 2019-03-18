<template>
    <div><br><br><br><br>
    <div class="f">
         <div><br>
           <el-row >
               <el-col :span="12">
                    <img v-bind:src="img1" class="image">
               </el-col>
               <el-col :span="12">
                   <div style="text-align:left"><el-tag>人力外包</el-tag><el-tag>微信小程序</el-tag></div>
                   <p style="">编号：{{endedproject_id}}</p>
                   <p style="text-align:left;font-size:15px">项目名：</p>
                   <p style="text-align:left;font-size:15px">工作室编号</p>
                   <p style="text-align:left;font-size:15px">工作室名：</p>
               </el-col>
           </el-row>
        </div><br><hr><br>
        <div class="g">
              <p style="">完成时间：</p>
              <p style="">本项目支付金额：</p>
              <p style="">所得评分</p>
              <el-rate
                v-model="mark"
                disabled          
                show-score
                text-color="#ff9900">
            </el-rate>
        </div>
        <br><hr>
    </div>
    </div>
</template>
<<script>
export default {
    
    data(){
        return{
            endedproject_id:this.$route.query.endedproject_id,
            img1:require('../../assets/logo.png'),
            mark:4.5,
            info:null,
            percentage:"40"
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

}
.g{
    font-size:1.2rem;
}

.image {
    max-width: 100%;
    height: auto;
}

  @media(max-width: 960px) {
    .f {
      width: 100%;
      margin: 0.5rem 0 0.5rem 0;
      font-size:15px;
      text-align: center;
    }
    .image {
        max-width: 80%;
        height: auto;
    }
    }
</style>
