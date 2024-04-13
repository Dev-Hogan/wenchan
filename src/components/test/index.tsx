import Test from './Test.vue'

type Option = {
  count?: number
}
export const useTest = ({ count }: Option) => {
  const NtTest = defineComponent({
    name: 'Test',
    render() {
      return h(Test, { count })
    }
  })
  return { NtTest }
}
