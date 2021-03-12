<template>
  <Demo1 :onChange="onChange" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Demo1 from './Demo1'

export default defineComponent({
  components: {
    Demo1
  },
  props: {},
  emits: ['onChange'],
  setup(props, { emit }) {
    const i = ref<number>(0)
    const onClick = () => {
      i.value++
    }
    const onChange = (e: number) => {
      emit('onChange', e)
    }
    return { i, onClick, onChange }
  }
})
</script>

<style>
</style>