<script setup>
import MetaForm from '@/components/metas/MetaForm.vue'
import MetaCard from '@/components/metas/MetaCard.vue'
import { useMetasStore } from '@/stores/metasStore'

const store = useMetasStore()
</script>

<template>
  <MetaForm @criar="store.adicionar" />

  <section class="metas-page">
    <header class="title-page">
      <i class="pi pi-bullseye"></i>
      <div>
        <h1>Metas</h1>
        <p>defina seus objetivos e acompanhe seu progresso!</p>
      </div>
    </header>


    <div class="forms_meta">
      <h3>Criar meta</h3>
      <p>Organize seus objetivos em um só lugar!</p>

      <form>
        <div>
          <label for="text">Título da meta *</label>
          <input id="titulo" type="text" placeholder="Ex: Estudar para o concurso" required>
        </div>

        <p>Data de inicio*</p>
        <label for="date">dd/mm/aaaa</label>

        <p>Data de finalização</p>
        <label for="date">dd/mm/aaaa</label>

        <h3>Descrição</h3>
        <label for="descricao"></label>
        <textarea name="" id="descricao" placeholder="Conte mais sobre sua meta..." rows="3"></textarea>

        <p>Grau de Importância</p>
        <option value="">Alto</option>
        <option value="">Médio</option>
        <option value="">Baixo</option>

        <p>Meta de Tempo Gasto</p>
        <label for="number">Ex.: 100</label>

        <button>+ Criar Meta</button>
      </form>
    </div>
  </section>

  <section>
    <div class="card_dash_meta">
      <p>Minhas metas</p>
      <button>Ver todas --> </button>
    </div>
  </section>
  <p v-if="!store.metas.length" class="vazio">Você ainda não tem metas. Crie a primeira acima! 🎯</p>
  <MetaCard v-for="m in store.metas" :key="m.id" :meta="m" @excluir="store.remover" />
</template>