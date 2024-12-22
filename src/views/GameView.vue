<template>
  <div class="warpper">
    <img :src="LOGIN_BG_IMG" class="bg-img" />
    <LoginView></LoginView>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_BG_IMG } from '@/utils/img'
import LoginView from './LoginView.vue'
</script>

<style lang="scss" scoped>
.warpper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.bg-img {
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  object-fit: cover;
  filter: blur(10px);
  z-index: -1;
}
</style>
