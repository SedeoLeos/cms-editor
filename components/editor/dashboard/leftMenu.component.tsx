import Arrow from "@/components/icons/arrow.svg";
import Plus from "@/components/icons/Plus.svg";
import Settings from "@/components/icons/settings.svg";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ImageList from "./image-list.component";


const LeftMenu = () => {
    return (
        <div className='w-[344px] bg-white/80 rounded-2xl'>
            <Tabs defaultValue="pages" className="relative flex flex-col h-full">
                <div className='flex gap-4 items-center p-5 border-b border-gray-800/10'>
                    <Image src={"/images/logo.png"} width={35} height={35} alt="logo"></Image>
                    <TabsList className='bg-gray-800/10 w-[240px]'>
                        <TabsTrigger className='px-6 flex-1' value="pages">Pages</TabsTrigger>
                        <TabsTrigger className='px-6 flex-1' value="assets">Assets</TabsTrigger>
                    </TabsList>
                    <Button className="absolute -right-2 px-2 h-5">
                        <Arrow className="fill-transparent  text-white" />
                    </Button>
                </div >
                <div className="p-5 flex-1 overflow-hidden ">
                    <TabsContent value="pages" className="h-full ">
                        <div className="flex flex-col gap-5 h-full ">
                            <div className='flex justify-between items-center'>
                                <p>Pages</p>
                                <Button>
                                    <Plus />
                                </Button>

                            </div>
                            <div className="bg-gray-800/5 border-gray-800/15 border flex-1  rounded-lg">
                            </div>
                            <div className='flex justify-between items-center'>
                                <p>Layers</p>
                            </div>
                            <div className="bg-gray-800/5 border-gray-800/15 border flex-[2] rounded-lg">
                            </div>
                            <div className="bg-gray-800/5 rounded-lg p-3 flex items-center gap-2">
                                <Settings /> Paramètres de cette page
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="assets" className="h-full overflow-hidden">

                        <div className="flex flex-col gap-5 h-full overflow-hidden">
                            <div className='flex justify-between items-center'>
                                <p>Ajouter</p>
                                <Button>
                                    <Plus />
                                </Button>
                            </div>
                            <ImageList/> 

                        </div>
                    </TabsContent>

                </div>
            </Tabs>

        </div>
    )
}
export default LeftMenu;
