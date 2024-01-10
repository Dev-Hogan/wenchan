import {Children} from '@/model';
export function AsideBar({ children }: Children) {
    return <>
        <div className='flex flex-1 flex-col h-full'>
            { children}
        </div>
    </>
 }