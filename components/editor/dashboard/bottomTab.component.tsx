import React from 'react'
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useModal } from '../modal/modal-provider-component';
import TemplateModal from '../modal/template.modal';
import ComposantModal from '../modal/component.modal';


const BottomTab = () => {
    const modalContext = useModal()
    const handelTemplate=()=>{
        modalContext.showModal(<TemplateModal close="ls"/>)

    }
    const handelComponent=()=>{
        modalContext.showModal(<ComposantModal/>)

    }

    return (

        <div className='absolute bottom-4 z-10 bg-white rounded-md overflow-hidden left-1/2 -translate-x-1/2 border-gray-100 border-2 flex shadow-lg'>
            <Button className='rounded-l-md bg-transparent text-gray-800 hover:bg-gray-200 rounded-none' onClick={handelTemplate}>Inserer une template</Button>
            <div className='w-[1px] bg-gray-100'></div>
            <Button className='rounded-r-md bg-transparent  text-gray-800 hover:bg-gray-200 rounded-none' onClick={handelComponent}>Inserer un composant</Button>
        </div>

    )
}
export default BottomTab;

