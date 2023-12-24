'use client'
import { Button } from '@/components/button'
import { ContentLeft } from '@/components/hero/contentLeft'
import { ContentRight } from '@/components/hero/contentRight'
import { Judul } from '@/components/judul'
import { Navigasi, items, items2 } from '@/constant/constant'
import Image from 'next/image'
import React, { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Items } from '@/components/items'
import { InfoKami } from '@/components/infokami'
import { Kontak } from '@/components/kontak'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"
import { FaWhatsapp } from 'react-icons/fa'
import { IoMenu, IoClose } from 'react-icons/io5'
import { MdLightMode as Light, MdOutlineNightlightRound as Dark } from 'react-icons/md'
import AOS from "aos";
import 'aos/dist/aos.css'
import Link from 'next/link'

const Main = React.memo(
    () => {
        const [onTouch, setOnTouch] = useState<boolean>(false)
        const [show, setShow] = useState<boolean>(false)
        const [darkMode, setDarkMode] = useState<boolean>(false)
        useEffect(() => {
            AOS.init({ duration: 1000 })
        }, [])

        const handelShowNav = useCallback(
            () => {
                setShow(!show)
            }, [show])

        const handelHumberger = useCallback(
            (e: MouseEvent<HTMLDivElement>) => {
                setShow(false)
            }, [show])

        function handelTargetScroll(value: string) {
            const aksi = document.getElementById(value)
            aksi?.scrollIntoView({ behavior: "smooth" })
        }
        return (
            <div
                onClick={handelHumberger}
                className={`z-[99] min-h-screen ${darkMode ? 'bg-slate-900' : ""}`}>
                <Link href={'https://wa.link/0wjqae'}>
                    <div
                        onTouchStart={() => setOnTouch(true)}
                        onTouchEnd={() => setOnTouch(false)}
                        onTouchCancel={() => setOnTouch(false)}
                        className={`${onTouch ? 'scale-110' : 'scale-100'} md:w-[64px] md:h-[64px] w-11 h-11 flex justify-center  items-center md:text-[44px] text-[32px] text-white bg-green-500 rounded-full fixed bottom-10 right-10 z-50 hover:scale-110  duration-300`}>
                        <FaWhatsapp />
                    </div>
                </Link>
                <header className={`sticky top-0 ${darkMode ? 'bg-slate-900' : "bg-white"} shadow z-50 `}>
                    <nav className=' md:px-16 md:h-[100px] h-[80px] px-4 flex justify-between items-center  '>
                        <section className='md:w-32 w-[90px] overflow-hidden h-[70%]'>
                            <div className='w-full h-full relative'>
                                <Image blurDataURL='/logo.png' placeholder='blur' sizes='600' src={'/logo.png'} fill alt='rental mobil makassar' />

                            </div>
                        </section>
                        <div className='flex items-center gap-4'>
                            <div className='md:hidden text-3xl h-8 w-8 flex items-center'>
                                <input className='absolute w-8 h-8 opacity-0 cursor-pointer' type='checkbox' checked={show ? true : false} onChange={() => handelShowNav()} />
                                <span className={`${darkMode ? 'text-kuning' : 'text-blue'}`}>{show ? <IoClose /> : <IoMenu />}</span>
                            </div>
                            <section className={` hidden left-0 py-8 md:py-0  w-full  md:flex md:flex-row flex-col gap-6 items-center text-blue `}>
                                {Navigasi.map((value) => (
                                    <div
                                        className={`${darkMode ? ' hover:text-white hover:border-white' : ' hover:text-black hover:border-black'} cursor-pointer hover:border-b-2`}
                                        onClick={() => handelTargetScroll(value.nav)}
                                        key={value.nav}>
                                        <div>{value.nav}</div>
                                    </div>
                                ))}
                                <Button onClick={() => handelTargetScroll('unitkami')} className=' px-4 py-2 bg-kuning text-white font-medium rounded-full'>OrderNow</Button>
                            </section>
                            <section
                                id='darkomde'
                                onClick={() => setDarkMode(!darkMode)}
                                className={` cursor-pointer text-[32px] ${darkMode ? 'text-kuning' : 'text-blue'}`}>
                                {darkMode ? <Light /> : <Dark />}
                            </section>
                        </div>
                    </nav>
                    {show ?
                        <section className={` md:hidden scale-y-100 duration-300 origin-top pb-8 border-b-4 border-blue w-full flex flex-col gap-6 items-center text-blue `}>
                            {Navigasi.map((value) => (
                                <div className=' cursor-pointer hover:border-b-2 hover:border-blue' onClick={() => handelTargetScroll(value.nav)} key={value.nav}>
                                    <div>{value.nav}</div>
                                </div>
                            ))}
                            <Button onClick={() => handelTargetScroll('unitkami')} className=' px-4 py-2 bg-kuning text-white font-medium rounded-full'>OrderNow</Button>
                        </section> :
                        <section className={`absolute z-50 md:hidden scale-y-0 origin-top py-8 border-b-4 border-blue w-full flex flex-col gap-6 items-center text-blue `}>
                            {Navigasi.map((value) => (
                                <div key={value.nav}>
                                    <div>{value.nav}</div>
                                </div>
                            ))}
                            <Button className=' px-4 py-2 bg-kuning text-white font-medium rounded-full'>OrderNow</Button>
                        </section>}
                </header>

                <main className=' overflow-hidden'>
                    <section id='Home' className='md:pl-16 px-6 md:flex md:h-[516px] md:overflow-hidden'>
                        <ContentLeft klick={handelTargetScroll} dataAos="fade-right" />
                        <ContentRight dataAos='fade-left' />
                    </section>

                    <section data-aos='fade-up' className='md:px-16 md:mt-16 mt-20 border-t-4 rounded-t-[50px]'>
                        <div className='flex justify-center pt-10'>
                            <Judul id='AboutUs'>AboutUs</Judul>
                        </div>
                        <div className='mt-[20px] h-[411px] md:flex '>
                            <article className='md:w-1/2 flex justify-center items-center relative mt-16 '>
                                <Image className='z-10 translate-x-4 md:w-auto md:h-auto w-[350px]' src={'/pariwisata.png'} blurDataURL='/pariwisata.png' placeholder='blur' width={500} height={200} alt="bus parawisata" loading='lazy' />
                                <div className='md:w-[400px] md:h-[350px] w-[300px] h-[300px] rotate-3 bg-kuning shadow-md rounded-3xl absolute -z-10'></div>
                                <div className='md:w-[400px] md:h-[350px] w-[300px] h-[300px] -rotate-3 bg-kuning shadow-md rounded-3xl absolute -z-10'></div>
                            </article>
                            <article className='md:w-1/2 mt-16 md:mt-0  flex flex-col justify-center '>
                                <div className='border-l-4 border-kuning md:pl-5 px-4 '>
                                    <h1 className='text-2xl font-bold text-blue'>Rental Mobil & Tour Makassar</h1>
                                    <p className='text-blue mt-6 text-[14px]'><span className='italic text-kuning text-lg font-semibold'>Cv.Rencard TalassaCity</span> adalah Perusahaan Rental Mobil dan Tour Terpercaya<br></br>
                                        di Kota Makassar yang sudah berpengalaman dalam menyediakan sarana<br></br>
                                        Transportasi yang Elegan, Bersih, dan Lengkap.<br></br><br></br>
                                        Kami seiap Melayani dan Mengantar Anda ke Destinasi Wisata, Kunjungan Kerja, <br>
                                        </br>Event dan lain-lain selama Anda di Kota Makassar.</p>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section className='mt-64 md:mt-0'>
                        <div className='flex justify-center mt-16'>
                            <Judul id='unitkami'>Unit Kami</Judul>
                        </div>
                        <div className='md:flex mt-[50px] md:gap-6 md:flex-row flex flex-col gap-6 '>

                            <div className='flex md:w-1/2 flex-col gap-4 px-4 md:px-0'>
                                {items.map((v) => (
                                    <div data-aos='fade-right' key={v.namaMobil} className='md:h-[300px] w-full bg-slate-100 shadow-lg md:rounded-r-2xl rounded-2xl overflow-hidden relative '>
                                        <div className='flex justify-center'>
                                            <h1 className='text-2xl pt-2 font-semibold border-b-2 max-w-[12rem] border-blue text-blue'>{v.namaMobil}</h1>
                                        </div>
                                        <div className='md:flex pt-4'>
                                            <div className='md:w-1/2 flex justify-center items-center h-full'>
                                                <Image placeholder='blur' blurDataURL={v.img} loading='lazy' className={`w-auto h-auto ${v.flip ? "-scale-x-100" : ""}`} src={v.img} width={258} height={181} alt={v.namaMobil}></Image>
                                            </div>
                                            {v.item.map((val, i) => (
                                                <div key={i} className='md:w-1/2 flex px-10 md:px-0 flex-col gap-4'>
                                                    <Items value={val.duration} valueSub={val.durationItem} Icon={val.iconDuration} />
                                                    <Items value={val.include} valueSub={val.includeItem} Icon={val.iconInclude} />
                                                    <Items value={val.kapasitas} valueSub={val.kapasitasItem} Icon={val.iconKapasitas} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className='md:absolute bottom-0 w-full md:w-auto pt-5 right-0'>
                                            <Link href={'https://wa.link/p51lx2'}>
                                                <Button className='md:px-20 w-full py-2 text-white bg-kuning  font-semibold text-lg md:rounded-tl-[30px]'>OrderNow</Button>
                                            </Link>
                                        </div>
                                    </div>

                                ))}
                            </div>

                            <div className='flex md:w-1/2 flex-col gap-4 px-4 md:px-0'>
                                {items2.map((v) => (
                                    <div data-aos='fade-left' key={v.namaMobil} className='md:h-[300px] w-full bg-slate-100 shadow-lg md:rounded-r-2xl rounded-2xl overflow-hidden relative '>
                                        <div className='flex justify-center'>
                                            <h1 className='text-2xl pt-2 font-semibold border-b-2 max-w-[12rem] border-blue text-blue'>{v.namaMobil}</h1>
                                        </div>
                                        <div className='md:flex pt-4'>
                                            <div className='md:w-1/2 flex justify-center items-center h-full'>
                                                <Image placeholder='blur' blurDataURL={v.img} loading='lazy' className={`w-auto h-auto ${v.flip ? "-scale-x-100" : ""}`} src={v.img} width={258} height={181} alt={v.namaMobil}></Image>
                                            </div>
                                            {v.item.map((val, i) => (
                                                <div key={i} className='md:w-1/2 flex px-10 md:px-0 flex-col gap-4'>
                                                    <Items value={val.duration} valueSub={val.durationItem} Icon={val.iconDuration} />
                                                    <Items value={val.include} valueSub={val.includeItem} Icon={val.iconInclude} />
                                                    <Items value={val.kapasitas} valueSub={val.kapasitasItem} Icon={val.iconKapasitas} />
                                                </div>
                                            ))}
                                        </div>
                                        <div className='md:absolute bottom-0 w-full md:w-auto pt-5 right-0'>
                                            <Link href={'https://wa.link/p51lx2'}>
                                                <Button className='md:px-20 w-full py-2 text-white bg-kuning font-semibold text-lg md:rounded-tl-[30px]'>OrderNow</Button>
                                            </Link>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </section>

                    <section className='mt-16'>
                        <div className='flex justify-center'>
                            <Judul id="Mengapa Kami?">Mengapa Memilih Kami?</Judul>
                        </div>
                        <div className='mt-[50px]'>
                            <div className='md:h-[440px] items-center bg-blue p-4'>
                                <div className='flex flex-wrap w-full h-full items-center justify-center gap-6 z-10'>
                                    <InfoKami>
                                        <h1 className=' text-xl md:text-2xl font-bold flex justify-center'><BiSolidQuoteAltLeft />Armada Terawat<BiSolidQuoteAltRight /></h1>
                                        <p className='text-[14px] text-justify pt-6'>Setiap unit mobil di Tallasacity Rent Car Makassar
                                            selalu mendapat perawatan rutin mulai dari perawatan harian,
                                            Rental Mobil mingguan dan Rental Mobil bulanan.
                                            Ketika anda menggunakan layanan kami, dipastikan bahwa kendaraan dalam kondisi sudah bersih,
                                            tidak berbau dan dalam performa maksimal.</p>
                                    </InfoKami>
                                    <InfoKami>
                                        <h1 className=' text-xl md:text-2xl font-bold flex justify-center'><BiSolidQuoteAltLeft />Tarif Murah & Kompotitif<BiSolidQuoteAltRight /></h1>
                                        <p className='text-[14px] text-justify pt-6'>Tarif sewa mobil relatif murah & bisa dibandingkan dengan kompetitor kami.
                                            Walaupun kami menyediakan jasa sewa mobil makassar murah, kualitas tetap menjadi perhatian karena Pada akhirnya kepuasan pelanggan
                                            yang akan menentukan kelangsungan bisnis kami.</p>
                                    </InfoKami>
                                    <InfoKami>
                                        <h1 className=' text-xl md:text-2xl font-bold flex justify-center'><BiSolidQuoteAltLeft />Supir Berpengalaman<BiSolidQuoteAltRight /></h1>
                                        <p className='text-[14px] text-justify pt-6'>Driver yang bekerja Tallasacity rental mobil makassar
                                            hanyalah mereka yang berpengalaman & profesional. Kami selalu memberikan pelatihan standar prosedur operasional dimana wajib memenuhi kenyamanan pelanggan
                                            mulai dari cara komunikasi sopan, etika dalam mengemudi, rute perjalanan dan wawasan pariwisata.</p>
                                    </InfoKami>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='mt-16'>
                        <div className='flex justify-center'>
                            <Judul id='Locations'>Kontak & Lokasi</Judul>
                        </div>
                        <div className='mt-[50px] md:flex'>
                            <div className='md:w-1/2 flex justify-center md:px-16 px-4'>
                                <iframe
                                    className='w-full h-[400px] md:pl-4 border-4'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.399107070023!2d119.42843258361744!3d-5.134960802997687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefd51c864f1f5%3A0x98d8e9ca1b24428f!2sJl.%20Urip%20Sumoharjo%20Lr.%2077%20No.3%2C%20RT.001%2FRW.03%2C%20Maccini%2C%20Kec.%20Makassar%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan%2090144!5e0!3m2!1sid!2sid!4v1703038248242!5m2!1sid!2sid"
                                    loading="lazy" >
                                </iframe>
                            </div>
                            <Kontak />
                        </div>
                    </section>
                </main>
                <footer className='py-10 bg-blue mt-16'>
                    <p className='text-center text-white'>Cv.RendCar TallasaCity Makassar 2024. All Rights Reserved</p>
                </footer>
            </div>
        )

    }
)

Main.displayName = "Main"
export default Main