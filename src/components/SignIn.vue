<template>
    <div class="login-form">
        <h1>登陆</h1>
        <v-text-field v-model="userName" label="用户名"></v-text-field>
        <v-text-field
            v-model="password"
            label="密码"
            type="password"
        ></v-text-field>
        <v-btn @click="loginAPI()">登陆</v-btn>
        <v-btn text @click="signUp()">注册</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: "",
            password: "",
        }
    },
    methods: {
        signUp() {
            console.log("signUp")
            this.$router.push({ name: "SignUp" })
        },
        loginAPI() {
            let post_data = {
                userName: this.userName,
                password: this.password,
            }
            this.$api.user.login(post_data).then((res) => {
                console.log(res)
                localStorage.setItem("token", res.data.data.token)
                localStorage.setItem("userName", this.userName)
                this.$router.push({ name: "Case" })
            })
        },
    },
}
</script>

<style scoped>
.login-form {
    width: 500px;
    margin: 0 auto;
    text-align: center;
}
</style>


