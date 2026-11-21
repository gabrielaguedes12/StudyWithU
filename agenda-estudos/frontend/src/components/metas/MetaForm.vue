<script>
import { ref } from 'vue'
import { IMPORTANCIAS } from '@/constants/importancias'

const emit = defineEmits(['criar'])

const aberto = ref(true)
const novo = () => ({ titulo: '', descricao: '', inicio: '', fim: '', importancia: '', horasMeta: null })
const form = ref(novo())

function enviar() {
    emit('criar', { ...form.value, horasMeta: Number(form.value.horasMeta) })
    form.value = novo()
}
</script>