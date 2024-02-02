import { Children } from '@/model'

export function PageContainer({ children }: Children) {
  return <div className="flex flex-1 flex-col items-center">{children}</div>
}
