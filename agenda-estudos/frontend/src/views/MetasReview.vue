<script setup>
import MetaForm from '@/components/metas/MetaForm.vue'
import MetaCard from '@/components/metas/MetaCard.vue'
import { useMetasStore } from '@/stores/metasStore'

const store = useMetasStore()
</script>

<template>
  <section class="metas-page">
    <header class="title-page">
      <i class="pi pi-bullseye"></i>
      <div>
        <h1>Metas</h1>
        <p>defina seus objetivos e acompanhe seu progresso!</p>
      </div>
    </header>

    <MetaForm @criar="store.adicionar" />

    <div class="card">
      <div class="list-head">
        <h3> <i class="pi pi-chart-bar"></i> Minhas metas</h3>
        <button type="button" class="link">Ver todas <i class="pi pi-arrow-right"></i></button>
      </div>
      <p v-if="!store.metas.length" class="vazio">
        Você ainda não tem metas. Crie a primeira acima!
      </p>
      <MetaCard v-for="m in store.metas" :key="m.id" :meta="m" @excluir="store.remover" />
    </div>
  </section>
</template>

