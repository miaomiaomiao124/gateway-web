<template>
  <div class="login">
    <el-row class="login-main"
            ref="login-main">
      <div class="login-main-content"
           @keyup.enter="login">
        <el-input placeholder="请输入账号"
                  v-model="loginInfo.username">
          <template slot="prepend"><img src="./user.png"
                 alt=""
                 srcset=""></template>
        </el-input>
        <el-input placeholder="请输入密码"
                  type="password"
                  v-model="loginInfo.password">
          <template slot="prepend"><img src="./password.png"
                 alt=""
                 srcset=""></template>
        </el-input>
        <div class="content-btn"
             @click="login"
             :style="{backgroundImage:`url(${loginBtn})`}">
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import btn from './btn.png'
export default {
  data () {
    return {
      loginInfo: {
        username: '',
        password: '',
      },
      loginBtn: btn
    }
  },
  methods: {
    ...mapActions({
      logins: 'user/userLogin'
    }),
    async login () {
      if (this.loginInfo.username == '' || this.loginInfo.password == '' || !this.loginInfo.username || !this.loginInfo.password) {
        this.$message.error("请输入账号密码");
        return false
      }
      await this.logins(this.loginInfo).then(res => {
        this.$router.push({ path: this.redirect || "/" });
        // this.$store.dispatch("user/getInfo").then(res => {
        //   localStorage.setItem("menusList", JSON.stringify(res.menus));
        // });
      })
    }
  }
}
</script>

<style lang="scss">
@charset "UTF-8";
.login {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: {
    color: #04142e;
  }
  // align-items: center;
  // justify-content: center;
  // flex-direction: column;
  // box-sizing: border-box;
  .login-main {
    width: 100%;
    max-width: 1400px;
    min-width: 1400px;
    min-height: 900px;
    max-height: 900px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: {
      size: contain;
      image: url(./login.jpg);
      repeat: no-repeat;
      position: center center;
    }
    position: relative;
  }
  .login-main-content {
    width: 350px;
    height: 350px;
    margin-top: 60px;
    padding: 70px 50px;
    box-sizing: border-box;
    text-align: center;
    background: {
      size: contain;
      image: url(./login_BG.png);
      position: center center;
      repeat: no-repeat;
    }
    img {
      width: 15px;
      height: 15px;
    }
    .el-input-group {
      background-color: #08193d;
    }
    .el-input {
      border: 1px solid #05dae9;
      margin-bottom: 45px;
    }

    .el-input-group__prepend,
    .el-input__inner {
      padding: 0 10px;
      background-color: #08193d;
      height: 40px;
      border: 0px !important;
    }
    .el-input__inner {
      padding: 0;
    }
    .content-btn {
      width: 142px;
      height: 44px;
      cursor: pointer;
      display: inline-block;
      background: {
        size: contain;
        position: center center;
        repeat: no-repeat;
      }
    }
  }
}
</style>
