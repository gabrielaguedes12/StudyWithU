<script setup>
defineProps({ valor: { type: Number, default: 0 } })
</script>

<template>
  <div class="ring" :style="{ '--p': valor }">
    <span>{{ valor }}%</span>
  </div>
</template>
