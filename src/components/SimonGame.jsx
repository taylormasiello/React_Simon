import React, { useState, useRef, useEffect } from 'react'
import GameBtn from './GameBtn'

const colors = ["green", "red", "yellow", "blue"];

function SimonGame() {
    const [sequence, setSequence] = useState([]);
    const [playing, setPlaying] = useState(false);

    const greenRef = useRef(null);
    const redRef = useRef(null);
    const yellowRef = useRef(null);
    const blueRef = useRef(null);

    const addNewColor = () => {
        const color = colors[Math.floor(Math.random() * 4)];
        const newSequence = [...sequence, color]; //... references/copies prev array
        setSequence(newSequence);
    };

    const handleNextLevel = () => {
        if(!playing) {
            setPlaying(true);
            addNewColor();
        }
    };

    useEffect(() => {
        const showSequence = (idx = 0) => {
            let ref = null;

            if (sequence[idx] === "green") ref = greenRef;
            if (sequence[idx] === "red") ref = redRef;
            if (sequence[idx] === "yellow") ref = yellowRef;
            if (sequence[idx] === "blue") ref = blueRef;

            //hightlight ref; set delay with setTimeout (function, timeInMilliSecs)
            setTimeout(() => {
                //ref variable.current ref/btn.list its classes.add a new class
                ref.current.classList.add("brightness-[2.5]");

                setTimeout(() => {
                    ref.current.classList.remove("brightness-[2.5]");
                }, 250);
            }, 250);
        };

    }, [sequence]);

    return (
        //main container
        <div className="flex justify-center items-center bg-neutral-800 text-white w-screen h-screen">
            {/*game container*/}
            <div className="relative flex flex-col justify-center items-center">
                {/*green and red btns container*/}
                <div>
                    {/*green btn*/}
                    <GameBtn 
                        border="rounded-tl-full" 
                        bg="bg-green-500" 
                        ref={greenRef}
                    />
                    {/*red btn*/}
                    <GameBtn 
                        border="rounded-tr-full" 
                        bg="bg-red-500" 
                        ref={redRef}
                    />
                </div>

                {/*yellow and blue btns container*/}
                <div>
                    {/*yellow btn*/}
                    <GameBtn 
                        border="rounded-bl-full" 
                        bg="bg-yellow-300" 
                        ref={yellowRef}
                    />
                    {/*blue btn*/}
                    <GameBtn 
                        border="rounded-br-full" 
                        bg="bg-blue-500" 
                        ref={blueRef}
                    />
                </div>
                {/*play btn*/}
                <button 
                    className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105" 
                    onClick={handleNextLevel}
                    >Play!
                </button>
            </div>
        </div>
    );
}

export default SimonGame;