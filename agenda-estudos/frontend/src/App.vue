<script setup>
import { RouterView, useRoute } from 'vue-router';
import Sidebar from '@/components/layout/Sidebar.vue'
import RightPanel from './components/layout/RightPanel.vue';

const route = useRoute()
</script>

<template>
  <RouterView v-if="route.meta.semLayout" />
  <div v-else class="layout">
    <Sidebar />
    <div class="content">
      <div class="workspace">
        <main class="page">
          <RouterView />
        </main>
        <RightPanel/>
      </div>
      <footer class="footer">© 2026 StudyWithU · Feito com 🤎 para seus planos</footer>
    </div>
  </div>
</template>