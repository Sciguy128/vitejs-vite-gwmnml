<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  description: String,
  deadline: String,
  priorty: String,
  isComplete: String,
  action: String,
});

const count = ref(0);
</script>

<template>
  <td class="col-2">{{ title }}</td>
  <td class="col-2">{{ description }}</td>
  <td class="col-2">{{ deadline }}</td>
  <td class="col-2">{{ priorty }}</td>
  <td class="col-2">{{ isComplete }}</td>
  <td class="col-2">{{ action }}</td>
</template>

<style scoped>
td {
  text-align: center;
}
</style>
