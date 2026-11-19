<template>
  <section>
    <div class="title_page">
      <h1>Metas</h1>
      <h2>defina seus objetivos e acompanhe seu progresso!</h2>
    </div>

    <div class="forms_meta">
      <h3>Criar meta</h3>
      <p>Organize seus objetivos em um só lugar!</p>

      <p>Título da meta*</p>
      <label for="text">Ex: Estudar para o concurso</label>

      <p>Data de inicio*</p>
      <label for="date">dd/mm/aaaa</label>

      <p>Data de finalização</p>
      <label for="date">dd/mm/aaaa</label>

      <p>Descrição</p>
      <label for="descricao">Conte mais sobre sua meta...</label>
      <textarea name="" id="descricao"  placeholder="Conte mais sobre sua meta..." rows="3"></textarea>

      <p>Grau de Importância</p>
      <option value="">Alto</option>
      <option value="">Médio</option>
      <option value="">Baixo</option>

      <p>Meta de Tempo Gasto</p>
      <label for="number">Ex.: 100</label>

      <button>+ Criar Meta</button>
    </div>
  </section>

  <section>
    <div class="card_dash_meta">
      <p>Minhas metas</p>
      <button>Ver todas --> </button>
    </div>
  </section>

</template>