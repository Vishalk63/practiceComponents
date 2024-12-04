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
            <Carousel
            
                opts={{
                    align: "start",
                }}
                className="w-[30&] "
            >
                <CarouselContent>
                    {Array.from({ length: 9 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-0">
                                {/* <Card className='p-0'> */}
                                    <CardContent className=" ">
                                        <img className="w-14" src="https://asset.gecdesigns.com/img/wallpapers/nature-wallpaper-with-lush-green-forest-river-and-beautiful-clouds-background-sr03072420-cover.webp" alt="" />
                                    </CardContent>
                                {/* </Card> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
