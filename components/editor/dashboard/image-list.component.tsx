import { Button } from '@/components/ui/button'
import Image from 'next/image'


const ImageList = () => {
    const array = Math.random().toString(36).split("")
    return (
        <div className="flex-1  flex flex-wrap gap-2 overflow-y-scroll">
            {
                array.map(item =>
                    <div key={item} className="bg-gray-800/5 flex-[0.5] min-w-[47%] border-gray-800/15 border   rounded-lg flex flex-col items-center p-2 gap-2">
                        <p>
                            Accueil
                        </p>
                        <div className="flex flex-1  relative h-[126.58px] w-full rounded-lg overflow-hidden">

                            <Image className='w-full h-full' width={100} height={100} src={"/images/image-1.png"} alt='image' />
                            <Button className='bg-gray-800/80 backdrop-blur-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Inserer</Button>
                        </div>
                    </div>

                )
            }




        </div>
    )
}

export default ImageList