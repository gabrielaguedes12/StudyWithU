<script setup>
import { computed } from 'vue'
import { TagImportancia } from '@/constants/ui/TagImportancia.vue'

const props = defineProps({ nivel: { type: String, required: true } })
const info = computed(() => IMPORTANCIAS[props.nivel])
</script>

<template>
    <TagImportancia :nivel="meta.importancia" />
</template>