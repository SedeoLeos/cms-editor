import React from 'react'
import { useModal } from './modal-provider-component'

const TemplateModal:React.FC<{close:string}> = ({ close }) => {
    const modalContext = useModal();
    return (
        <div className='w-full h-full flex justify-center items-end pb-20'>
            <div className='w-1/2 h-1/2 bg-zinc-300 rounded-lg shadow-lg overflow-hidden'>
                <div className='h-14 flex gap-10 py-2 px-5 items-center justify-between bg-white'>
                    <div className='flex gap-2'>
                        <div className='w-2 h-2 rounded-full bg-[#D9D9D9]'></div>
                        <div className='w-2 h-2 rounded-full bg-[#D9D9D9]'></div>
                        <div className='w-2 h-2 rounded-full bg-[#D9D9D9]'></div>
                    </div>
                    <div className='max-w-[350px] flex-1'>
                        <input type="search" name="" id="" className=' bg-[#D9D9D9] w-full h-10 rounded-lg' />
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-4 h-4 rounded-full bg-red-500' onClick={() => modalContext.hideModal(close)}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateModal
