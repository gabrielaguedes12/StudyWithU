<template>
    <div class="home">
        <div class="hero">
            <h1>Agenda de Estudos</h1>
            <p>Organize seus estudos de forma simples e eficiente.</p>
            <RouterLink to="/materias" class="btn">Ver Matérias</RouterLink>
        </div>
    </div>
    <div class="cards">
        <div class="card">
            <i class="pi pi-book"></i>
            <h3>Matérias</h3>
            <p>Cadastre e organize suas matérias</p>
        </div>

        <div class="card">
            <i class="pi pi-clock"></i>
            <h3>Sessões</h3>
            <p>Registre seu tempo de estudo</p>
        </div>

        <div class="card">
            <i class="pi pi-lightbulb"></i>
            <h3>Metas</h3>
            <p>Defina e acompanhe seus objetivos</p>
        </div>

        <div class="card">
            <i class="pi pi-chart-bar"></i>
            <h3>Dashboard</h3>
            <p>Visualize seu progresso semanal</p>
        </div>
    </div>
    <div class="aboutme">
        <h3>Nossa Missão</h3>
        <p>Falar sobre a missão e para que serve esse site</p>
    </div>

    <div class="contact">
        <h2>Contato</h2>

    </div>
</template>

<style>
.home {
    padding: 4rem 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.hero {
    text-align: center;
    margin-bottom: 3rem;

}

h1 {
    font-size: 2.5rem;
    color: var(--color1);
    margin-bottom: 1rem;
}

.hero p {
    color: var(--text-light);
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.btn {
    background: var(--color1);
    color: var(--text-light);
    padding: 0.75rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.2s;
}

.btn:hover {
    background: var(--color2);
}

.cards {
    display: grid;
    padding: 3rem 2rem;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
}

.card {
    background: var(--color3);
    border: 2px solid var(--color1);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    transition: border-color 0.2s;
}

.card:hover {
    border-color: var(--color1);
}

.icon {
    font-size: 2rem;
}

.card h3 {
    color: var(--text-light);
    margin: 0.75rem 0 0.5rem;
}

.card p {
    color: var(--text-muted);
    font-size: 0.9rem;
}
</style>