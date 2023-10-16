import { Module, VuexModule, Mutation, Action, getModule, MutationAction } from 'vuex-module-decorators';
import BaseModule, { TUserInfo } from './baseModel';

@Module({
  name: 'base',
})
export default class CommonModel extends BaseModule {
  // eslint-disable-next-line no-undef
  [propName: string]: any;
  public conferences = [];
  public events = [];

  private test?: string = 'aaa';

  public get getTest() {
    return this.test;
  }

  @Mutation
  public setTest(test: string) {
    this.test = test;
  }
  @MutationAction({ mutate: ['events', 'conferences'] })
  public async commitSetUserInfo(arg: TUserInfo) {
    this.context.commit('setUserInfo', arg);
    return { events: [], conferences: [], test: 'bbb' };
  }

  public get getUserInfo() {
    return this.userInfo;
  }
}
