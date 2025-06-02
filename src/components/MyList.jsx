import HomeNavbar from './HomeNavbar';
import './poppins.css'
import React from 'react';

function MyList() {
    return (
        <div className=' absolute h-[100%] w-[100%] flex items-center justify-center' style={{backgroundColor:"rgb(43,40,41)"}}>
            <div className="absolute top-0 left-0"><HomeNavbar /></div>
            <div className='text-2xl text-white top-35 left-15 absolute'>MY LIST</div>
            <p className='text-xl' style={{color: "lightgrey"}}>You haven't added anything yet!</p>
        </div>
    );
}

export default MyList;