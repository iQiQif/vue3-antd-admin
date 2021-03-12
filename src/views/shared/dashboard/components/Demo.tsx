import { Button } from 'ant-design-vue'
import { defineComponent, ref } from 'vue'
import Demo1 from './Demo1'
import Demo2 from './Demo2.vue'

export default defineComponent({
  setup() {
    const i = ref<number>(0)
    const onAdd = () => i.value++
    return () => (
      <>
        <Button onClick={onAdd}>{i.value}</Button>
        <Demo1
          onChange={(e) => {
            console.log(e)
          }}
        />
        <Demo2 />
      </>
    )
  }
})
