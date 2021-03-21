<template>
  <button @click="showMessage">Show Message</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Message } from '../packages/message'

export default defineComponent({
  setup() {
    const showMessage = () => {
      Message()
    }
    
    return {
      showMessage
    }
  }
  // methods: {
  //   showMessage() {
  //     (this as any).$message('123')
  //   }
  // }
})
</script>
