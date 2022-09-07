import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const x = ref(0)
    const onClick = () => {
      x.value++
    }
    return () => (
      <div>
        {x.value}
        <button onClick={onClick}>+1</button>
      </div>
    )
  }
})