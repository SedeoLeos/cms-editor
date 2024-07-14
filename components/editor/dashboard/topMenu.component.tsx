import React, { useContext } from 'react'
import Mobile from "@/components/icons/mobile.svg";
import Tablet from "@/components/icons/tablet.svg";
import Desktop from "@/components/icons/desktop.svg";

import { Button } from "@/components/ui/button"
import { DeviceContext } from './main.component';

const TopMenu = () => {
    const devices: IButtonBreakPoint[] = [{ icon: "iPhone X", children: <Mobile /> }, { icon: "iPad Mini", children: <Tablet /> }, { icon: "MacBook Pro", children: <Desktop /> }]

    return (
        <div className=' bg-white/80 rounded-t-xl h-[60px] flex justify-between items-center p-5'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded-full bg-[#D9D9D9]'></div>
                <div className='w-2 h-2 rounded-full bg-[#D9D9D9]'></div>
                <div className='w-2 h-2 rounded-full bg-[#D9D9D9]'></div>
            </div>
            <div className='max-w-[350px] flex-1'>
                <input type="search" name="" id="" className=' bg-[#D9D9D9] w-full h-10 rounded-lg' />
            </div>
            <div className='flex gap-2'>
                {devices.map((device) => <ButtonBreakPoint key={device.icon} icon={device.icon}>{device.children}</ButtonBreakPoint>)}
                {/* <Button className={[device == 'iPhone X' ? '' : disableClass, 'rounded-lg'].shift()} onClick={() => handlDevice("iPhone X")}>
                    <Mobile className={[device == 'iPhone X' ? Icon : disableIcon, 'fill-transparent'].shift()} />
                </Button>
                <Button className={[device == 'iPad Mini' ? '' : disableClass, 'rounded-lg'].shift()} onClick={() => handlDevice("iPad Mini")}>
                    <Tablet className="fill-transparent text-gray-800" />
                </Button>
                <Button className={[device == 'MacBook Pro' ? '' : disableClass, 'rounded-lg'].shift()} onClick={() => handlDevice("MacBook Pro")}>
                    <Desktop className="fill-transparent text-gray-800 " />
                </Button> */}
            </div>
        </div>
    )
}
export default TopMenu;
interface IButtonBreakPoint {
    icon: string,
    children: React.ReactNode
}
export const ButtonBreakPoint: React.FC<IButtonBreakPoint> = ({ icon, children }) => {
    const deviceContext = useContext(DeviceContext)
    if (!deviceContext) {
        throw new Error("")
    }
    const { device, setDevice } = deviceContext
    const handlDevice = (_device: string) => {
        setDevice(_device)
    }
    const disableClass = "bg-gray-100 hover:bg-gray-200"
    const disableIcon = "text-gray-800"
    const Icon = "text-white"
    return (

        <Button className={[device == icon ? '' : disableClass, 'rounded-lg'].shift()} onClick={() => handlDevice(icon)}>
            {/* <Desktop className={[device == icon ? Icon : disableIcon, 'fill-transparent'].shift()} /> */}
            {React.cloneElement(children as React.ReactElement, { className: [device == icon ? Icon : disableIcon, 'fill-transparent'].shift() })}
        </Button>);

}
