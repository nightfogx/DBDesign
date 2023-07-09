<template>
  <ElForm class="login-form" ref="loginForm" :model="loginForm" :rules="rules">
    <h1 class="login-title">登录</h1>
    <ElFormItem prop="username">
      <ElInput placeholder="请输入id" :prefix-icon="icons.UserFilled"  v-model="loginForm.username" size="large"></ElInput>
    </ElFormItem>
    <ElFormItem prop="password">
      <el-input placeholder="请输入密码" :prefix-icon="icons.Lock" v-model="loginForm.password" size="large"></el-input>
    </ElFormItem>
    <ElFormItem prop="code">
      <el-input placeholder="请输入验证码" :prefix-icon="icons.QuestionFilled" v-model="loginForm.code" size="large"></el-input>
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" class="login-btn" size="large" @click="signUp" >登录</ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script>
import * as icons from '@element-plus/icons-vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      icons: icons,
      // 表单信息
      loginForm: {
        // 账户数据
        username: "",
        // 密码数据
        password: "",
        
        // 验证码数据
        code: "",
        // 记住密码
        remember: false,
        // 验证码的key，因为前后端分离，这里验证码不能由后台存入session，所以交给vue状态管理
        codeToken: "",
      },
      // 表单验证
      rules: {
        // 设置账户效验规则
        username: [
          { required: true, message: "请输入账户id", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符的账户", trigger: "blur" },
        ],
        // 设置密码效验规则
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符的密码", trigger: "blur" },
        ],
        // 设置验证码效验规则
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 5, max: 5, message: "长度为 5 个字符", trigger: "blur" },
        ],
      },
      // 绑定验证码图片
      codeImg: null,
      // 后端提供的URL
      apiUrl: "/api/login",
    };
  },
  methods: {
    signUp()
    {
      this.$router.push('/mainpage')
    }
    // 提交表单
  },

};
</script>

<style scoped>
.login-form {
  grid-column: 1;
  grid-row: 1;
  opacity: 1;
  transition: 1s ease-in-out;
  transition-delay: 0.5s;
  /* 上下 | 左右 */
  padding: 1% 25%;
  z-index: 1;
}

.login-form.sign-up-model {
  opacity: 0;
  transition: 1s ease-in-out;
  z-index: 0;
}

.login-title {
  
  /*设置字体*/
  font-size: 60px;
  /*设置字体大小*/
  font-weight: bolder;
  /*设置字体粗细*/
 
  /*文字描边*/
color: #5c9ef5;
  /*设置文字的填充颜色*/

  font-size: 50px;
  text-align: center;

}

.login-btn {
  width: 100%;
  font-size: 18px;
}</style>
