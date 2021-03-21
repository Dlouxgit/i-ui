import type { App } from 'vue'
import Message from './src/message'

(Message as any).install = (app: App) => {
  // 兼容 vue2
  app.config.globalProperties.$message = Message
}

export { Message }

export default Message