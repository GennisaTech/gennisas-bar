import { ElLoading } from 'element-plus'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('game', {
  state: () => ({
    isShowModal: false, // 是否展示弹窗
    modalType: '', // 弹窗类型
    loadingService: { close: () => {} }, // 是否展示加载
  }),
  actions: {
    showModal(modalType: string) {
      this.modalType = modalType
      this.isShowModal = true
    },
    hideModal() {
      this.isShowModal = false
      this.modalType = ''
    },
    showLoading() {
      this.loadingService = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
    },
    hideLoading() {
      if (this.loadingService) {
        this.loadingService.close()
      }
    },
  },
})
