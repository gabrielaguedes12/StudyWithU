<template>
  <div class="home">
    <section class="hero">
      <h1>Agenda de Estudos</h1>
      <p>Entre e organize seus estudos de forma simples e eficiente.</p>
    </section>

    <section class="cards">
      <RouterLink v-for="f in features" :key="f.title" :to="f.to" class="card feature">
        <div class="icon-box"><i :class="['pi', f.icon]"></i></div>
        <h3>{{ f.title }}</h3>
        <p>{{ f.text }}</p>
      </RouterLink>
    </section>

    <section class="info">
      <div class="card">
        <h3>Nossa Missão</h3>
        <p>
          Ajudar estudantes a organizar a rotina, acompanhar metas e manter a
          constância, um passo de cada vez.
        </p>
      </div>

      <div class="card">
        <h3>Contato</h3>
        <p>gabr1.profissional@gmail.com</p>
        <p>https://github.com/gabrielaguedes12</p>
      </div>
    </section>
  </div>

  <div>
    <p>foto perfil</p>
    <h2>criar logica de ainda não entrou? botão entre ou cadastre-se. Entrou? editar perfil e botão sair</h2>
    <p>calendario-vazio sem login, com marcações com login</p>
  </div>
</template>

<script setup>
const features = [
  { title: 'Matérias', text: 'Cadastre e organize suas matérias', icon: 'pi-book', to: '/materias' },
  { title: 'Sessões', text: 'Registre seu tempo de estudo', icon: 'pi-clock', to: '/sessoes' },
  { title: 'Metas', text: 'Defina e acompanhe seus objetivos', icon: 'pi-lightbulb', to: '/metas' },
  { title: 'Dashboard', text: 'Visualize seu progresso semanal', icon: 'pi-chart-bar', to: '/dashboard' },
]
</script>


<style scoped>
.hero {
  text-align: center;
  padding: 3rem 1rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--sand), #F3E4DC);
  border-radius: var(--radius);
}

.hero h1 {
  font-size: 2.6rem;
  color: var(--burgundy);
  margin-bottom: .75rem;
}

.hero p {
  color: #5C4743;
  font-size: 1.1rem;
  margin-bottom: 1.75rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.feature {
  text-align: center;
  transition: transform .2s, border-color .2s;
}
.feature:hover { transform: translateY(-3px); border-color: var(--rose); }

.icon-box {
  width: 52px;
  height: 52px;
  margin: 0 auto .75rem;
  border-radius: 14px;
  background: #F0DEDA;
  display: grid;
  place-items: center;
}
.icon-box i { font-size: 1.5rem; color: var(--burgundy); }

.feature p { font-size: .9rem; }

.info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
</style>