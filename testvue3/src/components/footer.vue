<template>
    <div>
        <br><br>
        没有账号？<br>
        <el-button @click="turntoregister">注册</el-button><br><br><br>
        这里是页面尾部，需要以后修改
    </div>
</template>
<script>
export default {
    name:'footer',
    reject:['reload'],
    data(){

    },
    methods:{
        turntoregister:function(){
            this.$router.push('/register');
           this.$router.go(0);
        }

    },
}
</script>
<style>

</style>