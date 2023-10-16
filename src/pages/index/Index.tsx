import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/Test';
import { State, Mutation, Getter, Action, namespace } from 'vuex-class';
@Component
export default class Index extends Vue {
  @State('test') protected testState?: any;

  @Getter('getUserInfo') protected getUserInfo?: any;

  private name?: string = 'hello-index';

  private value?: string = 'haha';

  private test?: string = 'testsync';

  public handleChange(msg: any) {
    console.log(msg);
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
        <Test
          msg={this.name}
          onChange={this.handleChange}
          test={this.test}
          {...{
            on: {
              'update:test': (res: any) => {
                this.test = res;
              },
            },
          }}
          v-model={this.value}
        ></Test>
        {this.value}
        <br />
        {this.test}
        <br />
      </div>
    );
  }
}
