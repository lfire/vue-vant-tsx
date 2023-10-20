<template>
  <div>
    <DHeader title="Info Page" :author="{ name: '李四' }" />
    <div style="float: right"><router-link to="/">Go to Index</router-link></div>
    <p>Info page</p>
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
  methods: {
    test() {
      console.log('test');
    },
  },
};
</script>
