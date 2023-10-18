import { Component, Vue } from 'vue-property-decorator';
import style from './App.module.scss';
import * as tsc from 'vue-tsx-support';
@Component
export default class App extends tsc.Component<{}> {
  public render() {
    return (
      <div class={style.app}>
        <router-view></router-view>
      </div>
    );
  }
}
