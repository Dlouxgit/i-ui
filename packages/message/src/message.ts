import { render, createVNode, h } from 'vue'
import type { IMessageParams } from './message.type'
import MessageComponent from './message.vue'

const Message = (options: IMessageParams) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  // new Vue({ render: () => h(Message) }).mount()  // Vue2
  const container: any = document.createElement('div')
  const vm = createVNode(MessageComponent, options as any) // 第二个参数是组件的参数 props, 写 any 比较简单，不然可定义为 Data = Record<string unknow> , 把每个键都标定为 unknow ，或者定义为 VNodeProps
  render(vm, container) // 将 vm 渲染到 container 上，即替换掉 container 元素。
  document.body.appendChild(container.firstElementChild)
}

export default Message