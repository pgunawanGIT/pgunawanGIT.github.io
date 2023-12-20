import { Kontaks } from "@/constant/constant"

export const Kontak = () => {
    return (
        <div className='md:w-1/2 pl-4 md:pl-0 mt-16 md:mt-0 flex justify-center items-center border-l-4 border-kuning'>
            <ul className='text-blue flex flex-col gap-4 '>
                {Kontaks.map((value) => (
                    <li key={value.name}>
                        <div className='flex gap-2 items-center text-2xl font-semibold'>
                            <span>{value.icon}</span>
                            <h2>{value.name}</h2>
                        </div>
                        <p className='pl-8'>{value.sub}</p>
                        <p className='pl-8'>{value.sub2}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
