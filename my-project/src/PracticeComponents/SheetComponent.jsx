import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


function SheetComponent() {
    return (
        <div>
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                {/* <SheetContent side='right'> */}
                {/* <SheetContent side='left'> */}
                <SheetContent side='top'>
                {/* <SheetContent side='bottom'> */}
                    <SheetHeader >
                        {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription> */}

                        <div className='flex flex-col py-5 justify-center items-center gap-4'>
                            <div>Home</div>
                            <div>About</div>
                            <div>Skills</div>
                            <div>Projects</div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <img className='w-40' src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1705580343/ideas-and-advice-prod/en-us/adidas/adidas.png?_i=AA" alt="" />
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default SheetComponent