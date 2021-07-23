<template>
    <div class="signup-form">
        <h1>注册</h1>
        <v-text-field v-model='email' label="邮箱"></v-text-field>
        <v-text-field v-model='userName' label="用户名"></v-text-field>
        <v-text-field v-model='password' label="密码" type='password'></v-text-field>
        <v-btn @click="registerAPI()">注册</v-btn>
        <v-btn text @click="signIn()">返回</v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            userName:'',
            password:''
        }
    },
    methods:{
        signIn(){
            console.log('signIn')
            this.$router.push({path:'/'})
        },
        registerAPI(){
            let post_data = {
                'email':this.email,
                'userName':this.userName,
                'password':this.password,
            }
            this.$api.user.register(post_data).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>
.signup-form{
    width: 500px;
    margin: 0 auto;
    text-align: center;
}
</style>