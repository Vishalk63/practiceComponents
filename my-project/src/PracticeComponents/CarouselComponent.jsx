import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselComponent() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <Carousel className='w-[50%]'>
                <CarouselContent className='w-60'>
                    <CarouselItem><img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" alt="" /></CarouselItem>
                    <CarouselItem><img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" alt="" /></CarouselItem>
                    <CarouselItem><img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" alt="" /></CarouselItem>
                    <CarouselItem><img className="w-full h-full bg-cover" src="https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg" alt="" /></CarouselItem>
                    <CarouselItem><img className="w-full h-full bg-cover" src="https://i.pinimg.com/736x/79/fd/d1/79fdd17253b569a417e980a99aecd978.jpg" alt="" /></CarouselItem>
                    <CarouselItem><img src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg" alt="" /></CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}
