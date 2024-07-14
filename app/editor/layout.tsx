import LeftMenu from '@/components/editor/dashboard/leftMenu.component'
import Main from '@/components/editor/dashboard/main.component'
import RightMenu from '@/components/editor/dashboard/rightMenu.component'
import React from 'react'

export default function DashboardLayout({
    children, // will be a page or nested layout
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section 
        
        style={{
          background: "url('/images/image.png') lightgray 0% 0% / 25% 25% repeat "
        }} 
        className="h-screen">
            <div className="bg-gray-100/90 h-full flex gap-4 p-2">
                <LeftMenu></LeftMenu>
                <Main>
                    {children}
                </Main>

                <RightMenu></RightMenu>
            </div>
            {/* Include shared UI here e.g. a header or sidebar */}
        </section>
    )
}