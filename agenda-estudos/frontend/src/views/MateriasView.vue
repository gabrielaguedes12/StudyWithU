<template>
  <div class="container">
    <h2>Minhas Matérias</h2>

    <div class="form">
      <input
        v-model="novaNome"
        placeholder="Nome da matéria ex: Português"
        @keyup.enter="adicionarMateria"
      />
      
      <input v-model="novaCor" type="color" title="Escolha uma cor" />
      <button @click="adicionarMateria">Adicionar</button>
    </div>

    <p v-if="erro" class="erro">{{ erro }}</p>

    <div v-if="materias.length === 0" class="vazio">
      Nenhuma matéria cadastrada ainda.
    </div>

    <div class="lista">
      <div v-for="materia in materias" :key="materia.id" class="card">
        <span class="cor" :style="{ background: materia.cor }"></span>
        <span class="nome">{{ materia.nome }}</span>
        <button @click="deletarMateria(materia.id)" class="deletar">✕</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const API = 'http://localhost:8000'

const materias = ref([])
const novaNome = ref('')
const novaCor = ref('#791a78')
const erro = ref('')

onMounted(() => {
  buscarMaterias()
})

async function buscarMaterias() {
  try {
    const res = await axios.get(`${API}/subjects`)
    materias.value = res.data
  } catch {
    erro.value = 'Erro ao conectar com o servidor.'
  }
}

async function adicionarMateria() {
  if (!novaNome.value.trim()) {
    erro.value = 'Digite o nome da matéria!'
    return
  }
  try {
    await axios.post(`${API}/subjects`, {
      nome: novaNome.value,
      cor: novaCor.value,
      user_id: 1
    })
    novaNome.value = ''
    erro.value = ''
    buscarMaterias()
  } catch {
    erro.value = 'Erro ao adicionar matéria.'
  }
}

async function deletarMateria(id) {
  try {
    await axios.delete(`${API}/subjects/${id}`)
    buscarMaterias()
  } catch {
    erro.value = 'Erro ao deletar matéria.'
  }
}
</script>


<style scoped>
.container {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  color: var(--color1);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.form input:not([type="color"]) {
  flex: 1;
  padding: 0.65rem 1rem;
  border: 1px solid var(--color2);
  border-radius: 8px;
  background: var(--color3);
  color: var(--text-light);
  outline: none;
}

.form input:not([type="color"]):focus {
  border-color: var(--color1);
}

.form input[type="color"] {
  width: 44px;
  height: 44px;
  padding: 2px;
  border: 1px solid var(--color2);
  border-radius: 8px;
  background: var(--color3);
  cursor: pointer;
}

.form button {
  background: var(--color1);
  color: var(--text-light);
  border: none;
  padding: 0.65rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}

.form button:hover { background: var(--color2); }

.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color3);
  border: 1px solid var(--color2);
  padding: 1rem 1.2rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  transition: border-color 0.2s;
}

.card:hover { border-color: var(--color1); }

.cor {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
}

.nome {
  flex: 1;
  font-weight: 500;
  color: var(--text-light);
}

.deletar {
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--color2);
  border-radius: 6px;
  padding: 0.25rem 0.6rem;
  cursor: pointer;
  transition: all 0.2s;
}

.deletar:hover {
  background: var(--color2);
  color: var(--text-light);
}

.erro { color: #f87171; margin-bottom: 0.75rem; font-size: 0.9rem; }

.vazio {
  color: var(--text-muted);
  text-align: center;
  padding: 3rem;
  border: 1px dashed var(--color2);
  border-radius: 10px;
}
</style>