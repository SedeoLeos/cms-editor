'use client'
import React, { createContext, useState } from 'react'
import TopMenu from './topMenu.component';
import BottomTab from './bottomTab.component';
import { ModalProvider } from '../modal/modal-provider-component';
interface DeviceContextType {
    device: string,
    setDevice: React.Dispatch<React.SetStateAction<string>>
}
interface MainProps {
    children: React.ReactNode
}
export const DeviceContext = createContext<DeviceContextType | undefined>(undefined);
const Hello = () => {
    return <div>Hello, modal content!</div>;
};
const Main: React.FC<MainProps> = ({ children }) => {
    const [device, setDevice] = useState('iPhone X')
    return (
        <ModalProvider>
            <DeviceContext.Provider value={{ device, setDevice }}>
                <section className='flex-1 relative flex flex-col '>
                    <TopMenu></TopMenu >
                    <div className='flex-1  overflow-hidden'>
                        {children}
                    </div>
                    <BottomTab></BottomTab>
                </section>
            </DeviceContext.Provider>
        </ModalProvider>
    )
}

export default Main;