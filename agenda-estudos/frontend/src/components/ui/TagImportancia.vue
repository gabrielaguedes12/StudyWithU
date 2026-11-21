<!--props: propriedade-->
<script setup>
import {IMPORTANCIAS} from '@/constants/importancias'
const props = defineProps ({nivel: {type: String, required: true}})
const info = computed(() => IMPORTANCIAS[props.nivel])
</script>

<template>
    <span v-if="info" :class="['tag', info.tag]">
        <i class="pi pi-star-fill"></i> {{ info.label }}
    </span>
</template>