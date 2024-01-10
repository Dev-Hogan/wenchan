import { Children } from '@/model'
export default function Container({ children }: Children) {
  return <div className="w-[180px]">{children}</div>
}
