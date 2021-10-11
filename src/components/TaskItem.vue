<template>
  <div>TaskItem {{ task.title }}</div>
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
