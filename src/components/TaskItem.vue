<template>
  <div class="task-item">
    <p class="label">TaskItem {{ task.title }}</p>
    <button @click="$emit('click-done', task.id)" class="button">Done</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Task } from '@/types/Task';

export default defineComponent({
  name: 'TaskItem',
  props: {
    task: { type: Object as PropType<Task> },
  },
});
</script>
<style lang="scss" scoped>
.task-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
}

.button {
  cursor: pointer;
}
</style>
