import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'


function DrawerComponent() {
    return (
        <>
         {/* this is drawer example 1 --------------------- */}
            <Drawer>
                <DrawerTrigger>Open</DrawerTrigger>
                {/* <DrawerContent className='w-96'> */}
                <DrawerContent >
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src="https://i.pinimg.com/236x/af/82/02/af820295ae042cc2f312b07314f7aa55.jpg" alt="" />
                        <img src="https://i.pinimg.com/236x/af/82/02/af820295ae042cc2f312b07314f7aa55.jpg" alt="" />

                    </div>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


            {/* this is drawer example 2 ------------- */}


        </>
    )
}

export default DrawerComponent