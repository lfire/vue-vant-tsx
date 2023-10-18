import { Vue, Component } from 'vue-property-decorator';
import TestTpl from '@/components/TestTpl.vue';

@Component({
  components: {
    TestTpl,
  },
})
export default class About extends Vue {
  public created() {
    console.log('About created');
  }
}
