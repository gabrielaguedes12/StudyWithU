<script setup>
</script>

<template>
  <div>
    <nav>
      <span class="logo">Study With U</span>
      <div class="links">
      <RouterLink to="/">Início</RouterLink>
      <RouterLink to="/materias">Matérias</RouterLink>
      <RouterLink to="/sessoes">Sessões</RouterLink>
      <RouterLink to="/metas">Metas</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </div>
    </nav>
    <RouterView />
  </div>
</template>

<style>
nav {
  background: var(--color2);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--color1);
  border-radius: 12px;
}

.logo {
  color: var(--text-light);
  font-size: 1.2rem;
  font-weight: bold;
}

.links {
  display: flex;
  gap: 2rem;
}

.links a {
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.links a:hover,
.links a.router-link-active {
  color: var(--text-light);
}
</style>
