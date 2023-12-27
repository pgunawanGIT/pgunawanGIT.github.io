import Link from "next/link"
import { Button } from "../button"
import { FaArrowRight } from "react-icons/fa"
import { ReactEventHandler } from "react"

export const ContentLeft = ({ dataAos, klick }: { klick: any, dataAos: string }) => {
    return (
        <article data-aos={dataAos} className='md:w-1/2 flex flex-col justify-center text-smal '>
            <p className='md:text-4xl text-2xl font-bold text-blue'>PlatForm Terbaik Untuk<br></br>
                Rental Mobil.
            </p>
            <p className='text-blue pt-4 md:text-base text-[12px]'>Nikmati Perjalanan Liburan di Makassar Dengan Harga Sewa Murah,<br></br>
                Armada Lengkap, Transportasi Aman dan Nyaman.</p>
            <div className=' mt-6 flex md:gap-10 gap-4 items-center'>
                <Button onClick={() => klick('unitkami')} className='md:px-10 md:py-3 py-1 px-2 bg-kuning text-white md:font-medium rounded-full'>OrderNow</Button>

                <div className='flex gap-2 items-center'>
                    <span onClick={() => klick('unitkami')} className=' cursor-pointer font-medium md:text-base text-[12px] border-b-4 border-blue text-blue'>Lihat Detail Mobil</span>
                    <span className='text-blue animate-bounce'>
                        <FaArrowRight />
                    </span>
                </div>

            </div>
        </article>
    )
}
