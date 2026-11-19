<template>
  <div class="card">
    <h3>Bem-Vindo(a), {nome}!</h3>
    <p>Nesse espaço você poderá criar matérias, interligar com as suas metas e acompanhar seu progresso!</p>
    <button>Adicionar</button>
  </div>

  <div>
    <h3>Matérias</h3>
    <button class="button_invisible">Tudo</button>
    <div class="cards_scroll">
      <p>cards de cada materia com nome, data, descrição, meta de pomodoros e quantos concluidos</p>
    </div>
  </div>

  <div class="general_table">
    <p>tabela de materia vinculado ao destaque e progresso (feito, andamento, não iniciado)</p>
  </div>
</template>