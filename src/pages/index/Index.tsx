import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/Test';
import TestTpl from '@/components/TestTpl.vue';
import { State, Mutation, Getter, Action, namespace } from 'vuex-class';
import * as tsx from 'vue-tsx-support';
import { Button as VButton } from 'vant';
import { comPropsConvert } from '@/plugins/propsConvert';

const Button = comPropsConvert(VButton);

@Component({
  components: {
    TestTpl,
  },
})
export default class Index extends Vue {
  public _tsx!: tsx.DeclareProps<tsx.AutoProps<Index>>;
  public name?: string = 'hello-index';
  public count = 0;

  public value = 'haha';

  public test?: string = 'testsync';

  @State('test') protected testState?: any;

  @Getter('getUserInfo') protected getUserInfo?: any;

  public handleChange(msg: any) {
    console.log('handle change emit', msg);
  }
  public render() {
    return (
      <div>
        {this.testState}
        <br />
        {this.getUserInfo.username}
        <br />
        {this.getUserInfo.password}
        <br />
        {this.name}
        <input v-model={this.name} />
        <hr />
        {/* <TestTpl /> */}
        {/* <hr /> */}
        <Test
          test={this.test}
          msg={this.name}
          value={this.value}
          onChange={this.handleChange}
          {...{
            on: {
              // change: (res: any) => {
              //   console.log('change on Index.tsx, get value:', res);
              //   this.handleChange(res);
              // },
              'update:test': (res: any) => {
                console.log('update:test on Index.tsx, get value:', res);
                this.test = res;
              },
            },
          }}
          v-model={this.value}
        />
        <hr />
        {this.value}
        <br />
        {this.test}
        <br />
        <br />
        Vant Button:: {this.count}
        <br />
        <Button type="primary" size="small" onClick={() => this.count++}>
          Plus
        </Button>
        <br />
      </div>
    );
  }
}
