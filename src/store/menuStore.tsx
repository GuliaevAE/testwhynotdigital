import { defineStore } from 'pinia'

export const useMenuStore = defineStore('counter', {
  state: () => {
    return { slectedPage: 'Тарифы' }
  },
  getters: {
    Page:(state)=> state.slectedPage
    
  },
    
  actions: {
    selectPage(text: string) {
      this.slectedPage = text
    },
  },
})