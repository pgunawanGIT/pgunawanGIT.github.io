import Image from "next/image"

export const ContentRight = ({ dataAos }: { dataAos: string }) => {
    return (
        <article data-aos={dataAos} className='md:w-1/2 relative md:mt-0 mt-6 flex justify-center '>
            <div className='md:w-[800px] md:translate-x-[300px] md:h-[450px] w-[300px] h-[250px] bg-blue rounded-t-[50%] md:rounded-l-[30px] md:rounded-tr-none md:absolute bottom-0 md:right-0 flex justify-center  '>
                <div className=" relative w-full  md:w-[600px] md:-left-[250px] md:bottom-4 -bottom-16">
                    <Image src={'/fortuner.png'} sizes="600" fill alt='fortuner' blurDataURL="/fortuner.png" placeholder="blur"></Image>

                </div>
            </div>
        </article>
    )
}
