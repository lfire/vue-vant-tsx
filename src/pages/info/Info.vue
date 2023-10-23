<template>
  <div>
    <DHeader title="Info Page" :author="{ name: '李四' }" />
    <div style="float: right"><router-link to="/">Go to Index</router-link></div>
    <p>Info page</p>
    <p @click="testFn">Todos: {{ test }}</p>
    <div v-for="todo in todos" :key="todo.id">
      <span>{{ todo.id }}</span>
      <span>{{ todo.content }}</span>
    </div>
    <TestCom />
    <TestComTs />
    <TestComTsx />
  </div>
</template>
<script>
import DHeader from '@/components/Header';
import TestCom from '@/components/CompositionCom.vue';
import TestComTs from '@/components/CompositionComTs.vue';
import TestComTsx from '@/components/CompositionCom';
import { mapState, mapActions } from 'vuex';
import TodoListModule from '@/models/todo';
export default {
  name: 'Info',
  components: {
    DHeader,
    TestCom,
    TestComTs,
    TestComTsx,
  },
  data() {
    return {
      msg: 'Info',
    };
  },
  computed: {
    ...mapState(['test']),
    ...mapState('todoListModule', ['todos']),
  },
  methods: {
    // ...mapActions({
    //   getAllTodoItems: 'todoListModule/getAllTodoItems',
    // }),
    ...mapActions('todoListModule', ['getAllTodoItems']),
    async testFn() {
      console.log('test');
      // 第一种写法
      await this.getAllTodoItems();
      console.log(this.todos);
      // 第二种写法
      // await TodoListModule.getAllTodoItems();
      // console.log(TodoListModule.todos);
    },
  },
};
</script>
