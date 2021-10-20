<template>
  <InputForm @click-add="addTask" />
  <TaskItem @click-done="removeTask" v-for="task in tasks" :key="task.id" :task="task" />
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { Task, generateTask } from '@/types/Task';
import InputForm from './components/InputForm.vue';
import TaskItem from './components/TaskItem.vue';

interface State {
  tasks: Task[]
}

export default defineComponent({
  name: 'App',
  components: {
    InputForm,
    TaskItem,
  },
  setup() {
    const state = reactive<State>({
      tasks: [
        generateTask('My first task'),
        generateTask('My second task'),
      ],
    });
    const addTask = (title: string):void => {
      state.tasks = [...state.tasks, generateTask(title)];
    };
    const removeTask = (id: string):void => {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    };
    const tasks = computed(() => state.tasks);
    return { tasks, addTask, removeTask };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
