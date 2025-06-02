import React from 'react';
import backArrowIcon from './../assets/back_arrow_icon.png'

function Player() {
    return (
        <div className='bg-black flex justify-center items-center h-[100vh] flex-col'>
            <img src={backArrowIcon} alt="" className='top-[20px] left-[20px] width-[50px] absolute cursor-pointer' />
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title='Triler' allowFullScreen frameborder="0" width='90%' height='90%' className='rounded-md'></iframe>
            <div className="player-name text-white flex justify-between items-center w-[90%]">
                <p>Published Date</p>
                <p>Name</p>
                <p>Type</p>
            </div>
        </div>
    );
}

export default Player;