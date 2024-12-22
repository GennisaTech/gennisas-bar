<template>
  <div class="container show" ref="container">
    <div class="regText">注册</div>
    <img src="/close-large-fill.svg" class="closeBtn" @click="hide" />
    <div class="form">
      <input placeholder="请输入用户名" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <el-button round color="#E4AE60" @click="register">注册</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { registerUser } from '@/service/user'
import { useModalStore } from '@/stores/modalStore'
import { ref } from 'vue'

const container = ref()
const modalStore = useModalStore()

const username = ref('')
const password = ref('')

// 弹窗设置
const ModalOptions = {
  hideOnClickBackground: false,
}

// 隐藏弹窗
const hide = () => {
  container.value.classList.remove('show')
  container.value.classList.add('hide')
  setTimeout(() => {
    modalStore.hideModal()
  }, 100)
}

/**
 * 点击注册
 */
const register = async () => {
  const res = await registerUser({
    username: username.value,
    password: password.value,
  })
  console.log(res)
}

defineExpose({ ModalOptions, hide })
</script>
<style lang="scss" scoped>
.container {
  width: 572px;
  height: 393px;
  border-radius: 32px;
  background: rgba(245, 245, 245, 0.95);
  position: relative;
}
.regText {
  position: absolute;
  left: 36px;
  top: 21px;
  user-select: none;
  font-family: MiSans;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 0em;
  color: #3d3d3d;
}

/* 定义显示弹窗的动画关键帧 */
@keyframes showPopup {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 定义隐藏弹窗的动画关键帧 */
@keyframes hidePopup {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}

/* 当添加.show类时，应用显示弹窗的动画 */
.show {
  opacity: 1;
  visibility: visible;
  animation: showPopup 0.3s ease forwards;
}

/* 当添加.hide类时，应用隐藏弹窗的动画 */
.hide {
  animation: hidePopup 0.3s ease forwards;
}

.closeBtn {
  position: absolute;
  left: 488px;
  top: 21px;
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.form {
  position: absolute;
  top: 96px;
  left: 36px;
  & > * {
    box-sizing: border-box;
    width: 500px;
    height: 69px;
    margin-bottom: 27px;
  }
  & input {
    border-radius: 16px;
    background: rgba(221, 221, 221, 0.8);
    border: none;
    padding: 0 23px;
    line-height: 69px;
    font-size: 28px;
    font-family: Misans;
    font-weight: bold;
    color: #3d3d3d;
    &:focus-visible {
      outline: none;
    }
    &::placeholder {
      color: #cccccc;
    }
  }
  & button {
    font-family: MiSans;
    font-weight: bold;
    font-size: 36px;
    color: #3d3d3d;
    line-height: 69px;
  }
}
</style>
