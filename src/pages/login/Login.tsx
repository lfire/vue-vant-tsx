import { Vue, Component } from 'vue-property-decorator';
import './models/login';
import style from './Login.module.scss';

import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
const LoginModule = namespace('login');
@Component
export default class Login extends Vue {
  @LoginModule.Getter('getUsername') protected getUsername: any;
  @LoginModule.Mutation('setUsername') protected setUsername: any;
  @LoginModule.Getter('getPassword') protected getPassword: any;
  @LoginModule.Mutation('setPassword') protected setPassword: any;
  @LoginModule.Getter('getFormData') protected getFormData: any;
  @LoginModule.Mutation('setFormData') protected setFormData: any;
  @LoginModule.Action('getLogin') protected getLogin: any;
  @LoginModule.State('loading') protected loading: any;
  @LoginModule.State('loadingText') protected loadingText: any;
  @State('test') protected test: any;
  @Mutation('setUserInfo') protected setUserInfo: any;
  @Getter('getUserInfo') protected getUserInfo: any;
  @Action('commitSetUserInfo') protected commitSetUserInfo: any;
  public created() {
    console.log(this);
  }

  public get username() {
    return this.getUsername;
  }
  public set username(username: string) {
    this.setUsername(username);
  }

  public get password() {
    return this.getPassword;
  }
  public set password(password: string) {
    this.setPassword(password);
  }
  public set formData(formData: any) {
    this.setFormData(formData);
  }
  public get formData() {
    return this.getFormData;
  }

  public async handleSub() {
    await this.commitSetUserInfo({ username: 'a', password: 'b' });
    await this.getLogin();
  }
  public render() {
    return (
      <div class={style['router-pages']}>
        {this.test}
        <br />
        {this.getUserInfo.username}
        <br />
        {this.getUserInfo.password}
        <br />
        <van-field v-model={this.formData.username} clearable placeholder="请输入账号" label="测试formData.username" />
        <van-field v-model={this.formData.password} clearable placeholder="请输入账号" label="测试formData.password" />
        <van-field v-model={this.username} clearable placeholder="请输入账号" label="账号" />
        <van-field v-model={this.password} clearable type="password" placeholder="请输入密码" label="密码" />
        <van-button
          type="primary"
          loading={this.loading}
          onClick={this.handleSub}
          loadingText={this.loadingText}
          size="large"
        >
          登录
        </van-button>
      </div>
    );
  }
}
