import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
// import Login from '../PracticeComponents/Login'


function DialogComponent() {
    return (
        <>

            {/* example 1 ------------------------------ */}
            <Dialog >
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent className=' w-auto p-0 border-none rounded-2xl overflow-hidden '>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='flex justify-center items-center'>
                        <img className='hover:scale-125 transition-all duration-700' src="https://i.pinimg.com/236x/af/82/02/af820295ae042cc2f312b07314f7aa55.jpg" alt="" />
                    </div>
                    {/* <Login/> */}
                </DialogContent>
            </Dialog>




        </>
    )
}

export default DialogComponent