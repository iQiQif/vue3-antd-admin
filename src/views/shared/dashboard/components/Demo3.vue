<template>
  <Demo2 @onChange="onChange" />
  <a-button
    type="primay"
    :loading="true"
  >btn</a-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Demo2 from './Demo2.vue'

export default defineComponent({
  components: {
    Demo2
  },
  setup() {
    const onChange = (e: number) => {
      console.log(e)
    }
    return {
      onChange
    }
  }
})
</script>

<style>
</style>