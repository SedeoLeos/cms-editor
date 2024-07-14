'use client'
import { useContext } from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/device-selector.min.css'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { DeviceContext } from '../main.component'


const Responsible = () => {
    const deviceContext = useContext(DeviceContext)
    if(!deviceContext) return null
    const {device} = deviceContext


    return (

        // <div className='w-full h-full bg-white rounded-b-xl p-5 flex justify-center items-center'>Desktop view</div>
        <div className='w-full h-full overflow-scroll  flex justify-center' style={{ zoom: "100%" }}>
            {device != 'MacBook Pro' ? (
                <div className='pt-20'><DeviceFrameset device={device as any} color="black">
                <div className='w-full h-full bg-white rounded-b-xl p-5 flex justify-center items-center'>{device} view</div>
            </DeviceFrameset></div>) : (<div className='w-full h-full bg-white rounded-b-xl p-5 flex justify-center items-center'>Desktop view</div>)}


        </div>
    )
}




export default Responsible
