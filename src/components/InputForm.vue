<template>
 <div class="input-form">
   <input type="text" v-model="state.title" />
   <button @click="emitClickAdd" :disabled="!state.title">Add</button>
 </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface State {
  title: string;
}
export default defineComponent({
  setup(_, context) {
    const state = reactive<State>({ title: '' });

    const emitClickAdd = () => {
      context.emit('click-add', state.title);
    };

    return {
      state,
      emitClickAdd,
    };
  },
});
</script>

<style lang="scss" scoped>
.input-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px;
  border-bottom: solid 1px;
}
</style>
