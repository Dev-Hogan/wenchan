import { Children } from '@/model'
import {ScrollArea} from '@/components';

export function PageContainer({ children }: Children) {
  return <div className="flex flex-1 flex-col px-[60px] s-full">{children}</div>
}
