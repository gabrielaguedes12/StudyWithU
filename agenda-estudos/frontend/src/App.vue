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
  max-width: 1000px;
  margin:auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 2rem;
  border-radius: 25px;
  margin-bottom: 60px; 
  margin-top: 20px;
  background: var(--color2);
  box-shadow: 8px 8px 0px var(--color4);
  border-bottom: 3px solid var(--color1);
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
