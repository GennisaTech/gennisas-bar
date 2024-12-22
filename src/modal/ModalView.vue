<template>
  <div class="modal" @click="onClickBackground" ref="containerRef">
    <RegisterModal
      v-if="modalStore.modalType === 'register'"
      ref="modalRef"
      @click.stop=""
    ></RegisterModal>
  </div>
</template>
<script setup lang="ts">
import { useModalStore } from '@/stores/modalStore'
import RegisterModal from './RegisterModal.vue'
import { ref } from 'vue'

const modalStore = useModalStore() // 仓库

const modalRef = ref() // 弹窗的引用
const containerRef = ref()

const onClickBackground = () => {
  if (modalRef.value.ModalOptions.hideOnClickBackground === true) {
    containerRef.value.classList.add('transparent')
    modalRef.value.hide()
  }
}
</script>
<style lang="scss" scoped>
.modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(61, 61, 61, 0.6);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 300ms;
}

.transparent {
  opacity: 0;
}
</style>
