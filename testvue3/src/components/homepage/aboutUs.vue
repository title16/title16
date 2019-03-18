<template>
    <div>
        <br><br><br><br>
        <div class="aboutus">

            <el-row>
                <br>
                <el-col :span="8"><img src="../../assets/contact-us.png"></el-col>
                <el-col :span="16">&nbsp</el-col>
            </el-row><br>

            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <div style="margin-left:2rem">
                       <i class="icon-henry-iconfontphone" :v-bind="tel">&nbsp电话：{{tel}}</i>
                     </div> <br>         
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <div style="margin-left:2rem">
                        <i class="icon-henry-zhandianditu" :v-bind="website"></i>&nbsp网址：{{website}}<br>
                    </div> <br>
                </el-col>
            </el-row>

            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                     <div style="margin-left:2rem">
                         <i class="icon-henry-wxbdingwei" :v-bind="address">&nbsp地址：{{address}}</i><br>
                     </div> <br>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12"></el-col>
            </el-row>

             <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                     <b-map-component></b-map-component><br><br><br><br>
                </el-col>
            </el-row>
            

        </div>
    </div>
</template>
<script>
// import BMap from 'BMap';
import BMapComponent from './BMapComponent.vue';
export default {
    name:'aboutUs',
    data(){
        return{
            tel:'85192626',
            address:'杭州市江干区学源街258号中国计量大学',
            website:'.com',
        }
    },
    components:{
        'b-map-component':BMapComponent
    },
    mounted(){

    },
    methods:{
       
    }, 
}
</script>
<style>
.aboutus
{
    font-size:1.5rem;
    margin-left:1rem;
    margin-right:1rem;
    margin-top:0.5rem;
    text-align: left;
    background-color: white;

}
@media (max-width: 960px) {
  
    .aboutus{
            font-size:14px;
            margin:0rem;
            text-align: left;
            background-color: white;
        }
}
</style>
