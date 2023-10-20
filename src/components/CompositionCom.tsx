import { defineComponent, ref, h } from 'vue';
// import type { PropType, Ref } from 'vue';

interface Person {
  name: string;
  age: number;
}

export default defineComponent({
  // props: {
  //   // persons: Array as PropType<Person[]>,
  //   persons: {
  //     type: Array as PropType<Person[]>,
  //     required: false,
  //     default: () => [],
  //   },
  // },
  setup() {
    const count = ref(0);
    const addCount = () => {
      count.value++;
    };
    return {
      count,
      addCount,
    };
  },

  render() {
    return (
      <div>
        <hr />
        <h5>test composition api components with TSX</h5>
        <div onClick={this.addCount}>count: {this.count}</div>
        {/* <div>
          persons:
          {props.persons?.map((item) => (
            <div>
              {item.name} - {item.age}
            </div>
          ))}
        </div> */}
      </div>
    );
  },
});
