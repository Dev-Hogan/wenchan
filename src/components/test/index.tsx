import Test from './Test.vue'

type Option = {
  count?: number
}
export const useTest = ({ count }: Option) => {
  const NtTest = defineComponent({
    name: 'Test',
    setup() {
      return <Test count={count}></Test>
    }
  })
  return NtTest
}
