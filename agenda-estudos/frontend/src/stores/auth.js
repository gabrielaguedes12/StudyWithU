import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const usuario = ref(JSON.parse(localStorage.getItem('usuario') || 'null'))
  const logado = computed(() => !!usuario.value)

  function entrar(dados) {
    usuario.value = dados
    localStorage.setItem('usuario', JSON.stringify(dados))
  }

  function sair() {
    usuario.value = null
    localStorage.removeItem('usuario')
  }

  return { usuario, logado, entrar, sair }
})