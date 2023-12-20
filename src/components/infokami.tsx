import { ReactNode } from "react"

export const InfoKami = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-[400px] text-white p-4 h-[350px] border-[8px] rounded-3xl'>
            {children}
        </div>
    )
}
