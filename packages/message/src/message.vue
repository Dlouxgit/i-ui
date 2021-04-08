<template>
    <transition name="i-message-fade" @before-leave="onClose" @after-leave="$emit('destroy')">
        <div
            v-show="visible"
            class="i-message"
            :class="classs"
            :style="styles"
        >
            Message
        </div>
    </transition>
</template>

<script lang="ts">
import { computed, defineComponent, ref, PropType, onMounted, onUnmounted } from 'vue'

import { Itype } from './message.type'

export default defineComponent({
    props: {
        id: { type: Number, default: ''},
        message: { type: String, default: ''},
        type: { type: String as PropType<Itype>, default: 'info' },
        duration: { type: Number, default: 1500 },
        center: { type: Boolean, default: false },
        onClose: { type: Function as PropType<() => void> },
        offset: { type: Number, default: 20 }
    },
    setup(props) {
        const classs = computed(() => [
            `i-message--${props.type}`,
            props.center ? 'is-center' : ''
        ]) 

        const styles = computed(() => ({
            top: `${props.offset}px`
        }))

        const visible = ref()

        let timer: any = null

        const startTimer = () => {
            timer = setTimeout(() => {
                visible.value = false
            }, props.duration)
        }

        onMounted(() => {
            visible.value = true
            startTimer()
        })

        onUnmounted(() => {
            clearTimeout(timer)
        })
        return {
            classs,
            styles,
            visible
        }
    }
})
</script>