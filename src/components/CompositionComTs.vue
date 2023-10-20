<template>
  <fragment>
    <hr />
    <h5>test composition api components with TS</h5>
    <div @click="add">{{ count }}</div>
  </fragment>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
function add() {
  count.value++;
}
</script>
