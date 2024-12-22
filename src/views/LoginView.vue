<template>
  <div class="login-warpper" :style="{ backgroundImage: `url(${LOGIN_BG_IMG})` }">
    <img src="/logo.svg" class="logo-img" draggable="false" />
    <div class="login-form-warpper">
      <img src="/title.svg" class="title-img" draggable="false" />
      <div class="login-form">
        <input class="input" :value="userName" type="text" name="username" placeholder="用户名" />
        <input class="input" :value="password" type="password" name="password" placeholder="密码" />
        <el-button class="login-btn" round color="#E4AE60">登陆</el-button>
        <span class="reg-btn" @click="showRegisterModal">注册</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import { LOGIN_BG_IMG } from '@/utils/img'
import { ref } from 'vue'

const modalStore = useModalStore()

// 用户名
const userName = ref('')

// 密码
const password = ref('')

// 显示注册弹窗
const showRegisterModal = () => {
  modalStore.showModal('register')
}
</script>

<style lang="scss" scoped>
.login-warpper {
  width: 1440px;
  height: 1024px;
  opacity: 1;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  position: relative;
}
.login-form-warpper {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 426px;
  height: 1024px;
  opacity: 1;
  background: rgba(51, 51, 51, 0.5);
  backdrop-filter: blur(10px);
}
.login-form {
  position: absolute;
  top: 431px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title-img {
  position: absolute;
  left: 29px;
  top: 230px;
  width: 369px;
  height: 126px;
}
.logo-img {
  position: absolute;
  left: 32px;
  bottom: 12px;
  width: 245px;
  height: 144px;
}
.input {
  transition: box-shadow 500ms;
  font-family: MiSans;
  width: 278px;
  height: 62px;
  margin: {
    bottom: 36px;
  }
  box-shadow:
    0px 0px 0px 0px #e4ae60,
    inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 31px;
  text-align: center;
  font-size: 28px;
  color: #3d3d3d;
  &:focus-visible {
    outline: none;
    box-shadow:
      0px 0px 20px 0px #e4ae60,
      inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }
  &::placeholder {
    color: #d8d8d8;
  }
}
.login-btn {
  width: 139px;
  height: 62px;
  border-radius: 31px;
  font-family: MiSans;
  font-weight: bold;
  font-size: 28px;
  color: #3d3d3d;
  margin-top: 39px;
}

.reg-btn {
  font-family: MiSans;
  font-weight: bold;
  font-size: 28px;
  color: #e4ae60;
  margin: 10px;
  cursor: pointer;
  user-select: none;
}
</style>
