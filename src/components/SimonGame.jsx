import React from 'react'
import GameBtn from './GameBtn'

function SimonGame() {
    return (
        //main container
        <div className="flex justify-center items-center bg-neutral-800 w-screen h-screen">
            {/*game container*/}
            <div className="relative flex flex-col justify-center items-center">
                {/*green and red btns container*/}
                <div>
                    {/*green btn*/}
                    <GameBtn border="rounded-tl-full" bg="bg-green-500"/>
                    {/*red btn*/}
                    <GameBtn border="rounded-tr-full" bg="bg-red-500"/>
                </div>

                {/*yellow and blue btns container*/}
                <div>
                    {/*yellow btn*/}
                    <GameBtn border="rounded-bl-full" bg="bg-yellow-300"/>
                    {/*blue btn*/}
                    <GameBtn border="rounded-br-full" bg="bg-blue-500"/>
                </div>
                {/*play btn*/}
                <button className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105">
                    Play!
                </button>
            </div>
        </div>
    )
}

export default SimonGame