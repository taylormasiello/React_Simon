import React from 'react'

function GameBtn({ border, bg, onClick }) {
    return ( //border,bg tailwindcss classes, setup as props
        <button className={`${border} ${bg} w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2 duration-200 hover:scale-105`} onClick={onClick}/>
    )
}

export default GameBtn