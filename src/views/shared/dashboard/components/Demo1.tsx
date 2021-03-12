import { Button } from 'ant-design-vue'
import { defineComponent, ref, PropType } from 'vue'

export default defineComponent({
  props: {
    onChange: {
      type: Function as PropType<(e: number) => void>,
      required: true
    }
  },
  setup(props) {
    const i = ref<number>(0)
    const onAdd = () => {
      i.value++
      props.onChange(i.value)
    }
    return () => (
      <>
        <Button onClick={onAdd}>{i.value}</Button>
      </>
    )
  }
})
