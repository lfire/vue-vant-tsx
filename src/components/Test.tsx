import { Vue, Component, Model, Watch, Prop, Emit } from 'vue-property-decorator';
import TestTpl from '@/components/TestTpl.vue';
import * as tsx from 'vue-tsx-support';
@Component({
  components: {
    TestTpl,
  },
})
export default class Test extends Vue {
  public _tsx!: tsx.DeclareProps<tsx.AutoProps<Test>>;
  // public _tsx!: tsx.DeclareProps<tsx.PickProps<Test, 'msg' | 'value' | 'test'>>;

  @Prop({ required: false, default: '' })
  public msg?: string;

  @Model('cc')
  @Prop({ required: false, default: 'abcd' })
  public value?: string;

  @Prop({ required: false, default: '' })
  public test?: string;

  @Emit('change')
  protected change(val: string) {
    console.log('change on Test.tsx, send value:', val);
  }

  @Emit('cc')
  protected sendValue(val: string) {}

  @Emit('update:test')
  protected updateTest(val: string) {
    console.log('update:test on Test.tsx, send value:', val);
  }

  @Watch('msg')
  protected watchMsg(newVal: string, oldVal: string) {
    console.log(oldVal, newVal);
  }

  protected get computedMsg() {
    return 'msg:' + this.msg;
  }

  protected handleClick(event: MouseEvent) {
    this.sendValue('lalala');
    this.change('成功');
    this.updateTest('chenggong1');
  }
  protected render() {
    return (
      <div>
        msg:{this.msg}
        <br />
        <br />
        msg计算:{this.computedMsg}
        <br />
        <br />
        value:{this.value}
        <br />
        test:{this.test}
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}
