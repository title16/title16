<template>
    <div id='app'><br><br><br><br>
      <div class='f'>
          <el-row>
              <el-col  :xs="0" :sm="3" :md="4" :lg="8" :xl="8"><div class="grid-content bg-purple"></div>&nbsp</el-col>
              <el-col  :xs="24" :sm="18" :md="16" :lg="8" :xl="8"><div class="grid-content bg-purple-light">
                    <el-form ref="project" :model="project" label-width="100px">
                        <br><br>
                        <el-form-item label="项目名">
                            <el-input v-model="project.name"></el-input>
                        </el-form-item>
                        <el-form-item label="参考报价">
                            <el-input v-model="project.quote"></el-input>
                        </el-form-item>
                        <el-form-item label="技术要求">
                            <el-select v-model="demand" multiple placeholder="请选择技术要求">
                                <el-option
                                    v-for="item in techOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="外包类型">
                             <el-select v-model="typedemand" placeholder="请选择外包类型">
                                <el-option
                                    v-for="item in type1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="项目图片">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :file-list="fileList1"
                                list-type="picture">
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="招标书">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview1"
                                :on-remove="handleRemove1"
                                :file-list="fileList2"
                                list-type="picture">
                                <el-button size="small" type="primary">点击上传</el-button>
                            </el-upload>
                    </el-form-item>
                    <el-form-item label="其他事项">
                                <el-input type="textarea" v-model="project.desc" :autosize="{ minRows: 2, maxRows: 10}"></el-input> 
                    </el-form-item>
                    <br>
                         <el-button type="primary" @click="onSubmit">发布需求</el-button>
                   </el-form><br><br><br>
                  </div></el-col>
          </el-row>
      </div>  
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'postProject',
    data(){
        return{
            demand: [],//技术要求
            typedemand: [],//外包类型要求
            fileList1: [],
            fileList2: [],
            project:{
                name:'',
                quote:'',
                desc:'',
            },
            techOption:[
                {
                    value:'需求1',
                    label:'HTML'
                },
                {
                    value:'需求2',
                    label:'PHP'
                },
                {
                    value:'需求3',
                    label:'大数据'
                },
                {
                    value:'需求4',
                    label:'深度学习'
                },
            ],
            type1:[
                 {
                    value:'类型1',
                    label:'项目外包'
                },
                {
                    value:'类型2',
                    label:'人力外包'
                },
            ]
        }
    },
    methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
       handleRemove1(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview1(file) {
        console.log(file);
      },
    },
    components:{

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
   
    font-size:1.2rem;
    margin-left:5rem;
    margin-right:5rem;
    margin-top:2rem;
    text-align: center;
    border-radius: 25px;
    background-color: white
}    
@media (max-width: 960px) {
    .f{
        margin:0;
    }
    
}
</style>
