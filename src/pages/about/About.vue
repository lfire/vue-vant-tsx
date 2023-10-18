<template>
  <div class="container">
    <DHeader title="about page" :author="{ name: '张三', age: 30 }" />
    about
    <div style="float: right"><router-link to="/">Go to Index</router-link></div>
    <hr />
    <TestTpl />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Route, NavigationGuardNext } from 'vue-router';
import TestTpl from '@/components/TestTpl.vue';
import DHeader from '@/components/Header';
// 引入组件
@Component({
  components: {
    TestTpl,
    DHeader,
  },
})
export default class Index extends Vue {
  // 路由钩子函数
  beforeRouteEnter(to: Route, from: Route, next: NavigationGuardNext) {
    console.log('组件内路由守卫：beforeRouteEnter --> About');
    next();
  }
  beforeRouteUpdate(to: Route, from: Route, next: NavigationGuardNext) {
    console.log('组件内路由守卫：beforeRouteUpdate --> About');
    next();
  }
  beforeRouteLeave(to: Route, from: Route, next: NavigationGuardNext) {
    console.log('组件内路由守卫：beforeRouteLeave --> About');
    next();
  }
}
</script>
