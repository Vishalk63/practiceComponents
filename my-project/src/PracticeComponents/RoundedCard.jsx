import React from 'react'




function RoundedCard() {
    return (
        <div>
            <div class="relative w-48 h-48 bg-green-500 clip-path-inset flex items-center justify-center text-white text-lg font-bold">
                <button class="absolute bottom-0 right-0 hover:translate-x-40 hover:translate-y-48 hover:scale-150 transition-all duration-1000 transform translate-x-1/2 translate-y-1/2 bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 shadow-md">
                    Click
                </button>
            </div>
        </div>
    )
}

export default RoundedCard