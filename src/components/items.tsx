import { ComponentType, ReactNode } from "react"

export const Items = ({ value, valueSub, Icon }: { Icon: ReactNode, valueSub: string, value: string }) => {
    return (
        <div>
            <div className='text-blue flex gap-3 items-center font-semibold text-[18px]'>
                <span className='text-[28px]'>
                    {Icon}
                </span>
                <h1>{value}</h1>
            </div>
            <h2 className=' text-slate-400 ml-10'>{valueSub}</h2>
        </div>
    )
}
