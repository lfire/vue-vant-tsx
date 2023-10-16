import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

export type TUserInfo = {
  username: string;
  password: string;
};

export default class BaseModel extends VuexModule {
  protected userInfo?: TUserInfo = { username: '', password: '' };

  @Mutation
  setUserInfo(userInfo: TUserInfo) {
    this.userInfo = userInfo;
  }
}
