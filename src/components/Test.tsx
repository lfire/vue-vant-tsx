import { Vue, Component, Model, Watch, Prop, Emit } from 'vue-property-decorator';
@Component
export default class Test extends Vue {
  @Prop({ required: false, default: '' })
  private msg?: string;

  @Model('cc')
  @Prop({ required: false, default: 'abcd' })
  private value?: string;

  @Prop({ required: false, default: '' })
  private test?: string;

  @Emit('cc')
  public sendValue(val: string) {}

  @Emit('update:test')
  public updateTest(val: string) {}

  @Emit('change')
  public change(val: string) {}

  @Watch('msg')
  public watchMsg(newVal: string, oldVal: string) {
    console.log(oldVal, newVal);
  }

  public get computedMsg() {
    return 'msg:' + this.msg;
  }

  public handleClick(event: MouseEvent) {
    this.sendValue('lalala');
    this.change('成功');
    this.updateTest('chenggong1');
  }
  public render() {
    return (
      <div>
        msg:{this.msg}
        <br />
        msg计算:{this.computedMsg}
        <br />
        value:{this.value}
        <br />
        test:{this.test}
        <button onClick={this.handleClick}>点我</button>
      </div>
    );
  }
}
