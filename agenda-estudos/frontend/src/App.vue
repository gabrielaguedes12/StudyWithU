<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { to: '/', label: 'Início', icon: 'pi-home' },
  { to: '/entrar', label: 'Entre ou Cadastre-Se', icon: 'pi-book' },
  { to: '/materias', label: 'Matérias', icon: 'pi-book' },
  { to: '/sessoes', label: 'Sessões', icon: 'pi-clock' },
  { to: '/metas', label: 'Metas', icon: 'pi-lightbulb' },
  { to: '/dashboard', label: 'Dashboard', icon: 'pi-chart-bar' },
]

const titulo = computed(
  () => links.find((l) => l.to === route.path)?.label ?? 'StudyWithU'
)
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <i class="pi pi-graduation-cap"></i>
        <h1>StudyWithU</h1>
        <small>Agenda de estudos</small>
      </div>

      <nav class="menu">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="menu-item">
          <i :class="['pi', l.icon]"></i>
          {{ l.label }}
        </RouterLink>
      </nav>
    </aside>

    <div class="content">
      <header class="topbar">
        <h2>{{ titulo }}</h2>
      </header>

      <main class="page">
        <RouterView />
      </main>

      <footer class="footer">© 2026 StudyWithU · Feito com 🤎 para estudantes</footer>
    </div>
  </div>
</template>