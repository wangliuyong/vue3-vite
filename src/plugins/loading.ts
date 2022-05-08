import { App,createVNode, VNode,render } from "vue";
import Loading from '@/components/Loading.vue'

export function setupLoading(app: App) {
  const vnode:VNode = createVNode(Loading)

  render(vnode,document.body)


  console.log(222,vnode);
  
}