import { Vue, Component } from 'vue-property-decorator';
import Header from '@/components/Header';
import Test from '@/components/Test';
import { State, Mutation, Getter, Action, namespace } from 'vuex-class';
import * as tsx from 'vue-tsx-support';
import { Button as VButton } from 'vant';
import { comPropsConvert } from '@/plugins/propsConvert';
import { Log } from '@/plugins/decorator';
import { Fragment } from 'vue-fragment';

const Button = comPropsConvert(VButton);

@Component
export default class Index extends Vue {
  public _tsx!: tsx.DeclareProps<tsx.AutoProps<Index>>;
  public name?: string = 'hello-index';
  public count = 0;

  public value = 'haha';

  public test?: string = 'testsync';

  @State('test') protected testState?: any;

  @Getter('getUserInfo') protected getUserInfo?: any;

  @Log
  public handleChange(msg: any) {
    console.log('handle change emit', msg);
  }
  public renderTest() {
    return (
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
    );
  }
  public render() {
    return (
      <div style="padding: 10px;">
        <Header title={'Index Page'} author={{ name: '王五', age: 25 }} />
        <div>
          {this.testState}
          <br />
          {this.getUserInfo.username}
          <br />
          {this.getUserInfo.password}
          <br />
          input v-model test (current value: {this.name})::
          <input v-model={this.name} />
          <hr />
          <fragment>{this.renderTest()}</fragment>
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
      </div>
    );
  }
}
