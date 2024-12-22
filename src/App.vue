<template>
  <GameView />
  <ModalView v-if="modalStore.isShowModal" />
</template>
<script setup lang="ts">
import GameView from '@/views/GameView.vue'
import { useModalStore } from './stores/modalStore'
import ModalView from './modal/ModalView.vue'
const modalStore = useModalStore()
</script>
<style scoped></style>
