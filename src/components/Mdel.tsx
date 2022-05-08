const value = ref('')

const demo  =() => {
  return (
    <div>
      <input v-model={value.value} type="text" />
      <div>{value.value}</div>
    </div>
  )
}

export default demo