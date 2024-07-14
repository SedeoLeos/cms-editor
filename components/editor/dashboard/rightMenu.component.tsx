import React from 'react'
import { Button } from "@/components/ui/button"
import Plus from "@/components/icons/Plus.svg";
import Union from "@/components/icons/Union.svg";


const RightMenu = () => {
    return (
        <div className='w-[344px] bg-white/80 rounded-2xl h-full flex flex-col'>
            <div className='flex gap-4 items-center p-5 border-b border-gray-800/10'>
                <Button className="bg-gray-800/10 hover:bg-gray-800/20 text-gray-800">
                <Union/>
                </Button>
                <Button className="bg-gray-800/10 hover:bg-gray-800/20 text-gray-800">Mise à jour</Button>
                <Button className="bg-gray-800">Publier</Button>
            </div >
            <div className="p-5 flex-1 ">
                <div className="flex flex-col gap-5 h-full ">
                    <div className='flex justify-between items-center'>
                        <p>Composants</p>
                        <Button>
                            <Plus/>
                        </Button>

                    </div>
                    <div className="bg-gray-800/5 border-gray-800/15 border flex-1  rounded-lg">
                    </div>
                   
                </div>


            </div>
        </div>
    )
}
export default RightMenu;
