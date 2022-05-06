import { useStorage,StorageSerializers } from '@vueuse/core'

// bind string with SessionStorage
// const id = useStorage('my-id', 'some-string-id', sessionStorage) // returns Ref<string>


// 初始化全局变量同时持久化
const user = useStorage('USER', null,localStorage,{
  serializer:StorageSerializers.object
})


export const useUser = () => {

  const userModel = ref({
    name:'wangliuyong',
    token:'rtrttrqwtrwrq7576567rh'
  })

  const isLogin = computed(() => {
    console.log(111);
    
    return user.value?.token
  })

  const login = () => {
    user.value = {...userModel.value}
  }
  const logout = (data:any) => {
    user.value = null
  }

  return {
    user,
    userModel,
    isLogin,
    login,
    logout
  }
}