import React, { useState, useRef, useEffect } from 'react'
import GameBtn from './GameBtn'

const colors = ["green", "red", "yellow", "blue"];

function SimonGame() {
    const [sequence, setSequence] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [playingIdx, setPlayingIdx] = useState(0);

    const greenRef = useRef(null);
    const redRef = useRef(null);
    const yellowRef = useRef(null);
    const blueRef = useRef(null);

    const resetGame = () => {
        setSequence([]);
        setPlaying(false);
        setPlayingIdx(0);
    };

    const addNewColor = () => {
        const color = colors[Math.floor(Math.random() * 4)]; //grabs rand color from colors[]
        const newSequence = [...sequence, color]; //... references/copies prev array; adds new rand color
        setSequence(newSequence);
    };

    const handleNextLevel = () => {
        if(!playing) {
            setPlaying(true);
            addNewColor();
        }
    };

    const handleColorClick = (e) => {
        if (playing) {
            e.target.classList.add("opacity-50");

            setTimeout(() => {
                e.target.classList.remove("opaciyt-50");

                const clickColor = e.target.getAttribute("color"); //event.btn clicked.color of btn

                if (sequence[playingIdx] === clickColor) { //clicked correct color in sequence
                    if (playingIdx === sequence.length - 1) { //clicked last color in sequence
                        setTimeout(() => {
                            setPlayingIdx(0); //start new level
                            addNewColor();
                        }, 250);
                    }
                    else {
                        setPlayingIdx(playingIdx + 1);
                    }
                }
                else {
                    alert("Game Over :( Try Again?");
                    resetGame();
                }
            }, 250);
        }
    };

    useEffect(() => {
        if(sequence.length > 0) {
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
                        if(idx < sequence.length - 1) showSequence(idx + 1); //recursion to show sequence
                    }, 250);
                }, 250);
            };
            
            showSequence();
        }
    }, [sequence]); //triggers when sequence[] changes/new color added

    return (
        //main container
        <div className="flex justify-center items-center bg-neutral-800 text-white w-screen h-screen">
            {/*game container*/}
            <div className="relative flex flex-col justify-center items-center">
                {/*green and red btns container*/}
                <div>
                    {/*green btn*/}
                    <GameBtn 
                        color="green"
                        border="rounded-tl-full" 
                        bg="bg-green-500" 
                        onClick={handleColorClick}
                        ref={greenRef}
                    />
                    {/*red btn*/}
                    <GameBtn 
                        color="red"
                        border="rounded-tr-full" 
                        bg="bg-red-500" 
                        onClick={handleColorClick}
                        ref={redRef}
                    />
                </div>

                {/*yellow and blue btns container*/}
                <div>
                    {/*yellow btn*/}
                    <GameBtn 
                        color="yellow"
                        border="rounded-bl-full" 
                        bg="bg-yellow-300" 
                        onClick={handleColorClick}
                        ref={yellowRef}
                    />
                    {/*blue btn*/}
                    <GameBtn 
                        color="blue"
                        border="rounded-br-full" 
                        bg="bg-blue-500" 
                        onClick={handleColorClick}
                        ref={blueRef}
                    />
                </div>
                {/*play btn*/}
                <button 
                    className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105" 
                    onClick={handleNextLevel}
                    >{sequence.length === 0 ? "Play!" : sequence.length}
                </button>
            </div>
        </div>
    );
}

export default SimonGame;