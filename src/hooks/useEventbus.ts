import { onUnmounted } from 'vue'
import mitt from 'mitt'

const emitter = mitt()

// 自定义触发器
const customEmit = (eventName: string, data?: any): void => {
  emitter.emit(eventName, data)
}

// 自定义接收器
const customOn = (eventName: string, callback: Function): void => {
  emitter.on(eventName, (data) => callback(data))
}

export const useEventbus = () => {
  onUnmounted(() => {
    emitter.all.clear()
  })
  return {
    customEmit,
    customOn
  }
}
