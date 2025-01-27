import { Vue, Component, Prop } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import styles from './Header.module.scss';
interface User {
  name: string;
  age: number;
}
@Component
export default class Header extends Vue {
  public _tsx!: tsx.DeclareProps<tsx.AutoProps<Header>>;
  // public _tsx!: tsx.DeclareProps<tsx.PickProps<Header, 'title' | 'author'>>;

  @Prop({ type: String, default: '标题' }) public readonly title: string;
  @Prop({ type: Object, default: () => ({ name: '-', age: '-' }) }) public readonly author!: User;

  protected goAbout() {
    this.$router.push('/about');
  }

  protected render() {
    return (
      <div class={styles.header}>
        <div class={styles.title}>
          <h1>{this.title}</h1>
          <span onClick={this.goAbout}>
            作者：
            <span>{this.author.name}</span> of <span>{this.author.age}</span>
          </span>
        </div>
      </div>
    );
  }
}
