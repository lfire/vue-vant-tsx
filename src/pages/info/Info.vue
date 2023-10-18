<template>
  <div>
    <DHeader title="Info Page" :author="{ name: '李四' }" />
    <div style="float: right"><router-link to="/">Go to Index</router-link></div>
    <p>Info page</p>
  </div>
</template>
<script>
import DHeader from '@/components/Header';
export default {
  name: 'Info',
  components: {
    DHeader,
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
