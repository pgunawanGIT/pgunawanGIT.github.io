
export const Judul = ({ children, id }: { id?: string, children: string }) => {
    return (
        <h1 id={id} className='md:text-4xl text-[28px] font-extrabold max-w-[30rem] text-blue border-b-4 border-blue'>{children}</h1>
    )
}
