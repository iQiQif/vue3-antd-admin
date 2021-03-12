<template>
  demo2
  <Button @click="onClick">{{ i }}</Button>
  <Demo1 :onChange="onChange" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue'
import Demo1 from './Demo1'

export default defineComponent({
  components: {
    Button,
    Demo1
  },
  props: {},
  setup() {
    const i = ref<number>(0)
    const onClick = () => {
      i.value++
    }
    const onChange = (e) => {
      console.log(e)
    }
    return { i, onClick, onChange }
  }
})
</script>

<style>
</style>