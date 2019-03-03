<template>

    <div>
        <br><br>
        已有账号？<br>
        <el-button @click="turntologin">登录</el-button><br><br><br>
        这里是页面尾部，需要以后修改
    </div>
</template>
<script>
export default {
    name:'footer2',
    data(){

    },
    methods:{
        turntologin:function(){
            this.$router.push('/login');
            this.$router.go(0);
        }

    },
}
</script>
<style>

</style>