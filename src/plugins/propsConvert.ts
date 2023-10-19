import { ofType } from 'vue-tsx-support';
import Vue from 'vue';

type PowerPartial<T> = {
  // 如果是 object，则递归类型
  [U in keyof T]?: T[U] extends Function ? Function : T[U] extends object ? PowerPartial<T[U]> : T[U];
};
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type OmitVue<T> = PowerPartial<Omit<T, keyof Vue>>;

interface AnyEvent {
  [key: string]: any;
}
interface AnyScopedSlots {
  [key: string]: any;
}

function comPropsConvert<T extends Vue>(componentType: new (...args: any[]) => T) {
  return ofType<OmitVue<T>, AnyEvent, AnyScopedSlots>().convert(componentType);
}
export { comPropsConvert };
