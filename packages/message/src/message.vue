<template>
  <div
    :class="classs"
  >
    msg
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import type { IType } from './message.type'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<IType>,
      default: 'info'
    },
    duration: {
      type: Number,
      default: 0.4
    },
    center: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 20
    },
    onClose: {
      type: Function as PropType<() => void>
    },
  //     id?: string,
  // message?: string,
  // type?: IType,
  // duration?: number,
  // center?: boolean,
  // onClose?: () => void
  // offset?: number
  },
  setup(props) {
    // props.type
    const classs = computed(() => [
      'i-message--' + props.type,
      props.center ? 'is-center' : ''
    ])

    const styles = computed(() => {
      top: `${props.offset}px`
    })

    return {
      classs,
      styles
    }
  },
})
</script>
