import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMetasStore = defineStore('metas', () => {
    const metas = ref([
        { id: 1, titulo: 'Estudar para o Concurso', inicio: '2026-11-01', fim: '2026-11-30', importancia: 'alta', horasMeta: 100, horasFeitas: 70 },
        { id: 2, titulo: 'Aprender React', inicio: '', fim: '', importancia: 'media', horasMeta: 50, horasFeitas: 20 },
        { id: 3, titulo: 'Melhorar meu inglês', inicio: '2026-12-01', fim: '2026-12-31', importancia: 'baixa', horasMeta: 30, horasFeitas: 0 },
  ])

    function adicionar(dados) {
    metas.value.unshift({ id: Date.now(), ...dados, horasFeitas: 0 })
  }

  function remover(id) {
    metas.value = metas.value.filter((m) => m.id !== id)
  }

  return { metas, adicionar, remover }
})