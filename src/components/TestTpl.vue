<template>
  <div>
    <h1>TestTpl</h1>
    <test />
  </div>
</template>
<script>
import Test from './Test';
export default {
  name: 'TestTpl',
  components: {
    Test,
  },
  data() {
    return {
      msg: 'TestTpl',
    };
  },
  methods: {
    test() {
      console.log('test');
    },
  },
};
</script>
