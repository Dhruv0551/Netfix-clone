import React from 'react';
import Navbar from './HomeNavbar'
import banner from './../assets/inception.jpg'
import inctt from './../assets/inctt.png'
import playIcon from './../assets/play_icon.png'
import infoIcon from './../assets/info_icon.png'
import './Home.css'
import TitleCards from './TitleCards';
import Footer from './Footer'

function Home(props) {
    return (
        <>
            <div className="home bg-gray-950">
                <Navbar />
                <div className="hero">
                    <div className="banner-container">
                        <img src={banner} className='banner_img' alt="Banner" />
                        <div className="gradient-overlay"></div>
                    </div>
                    <img src={inctt} className='overlay_img ml-55' alt="Overlay" />
                    <p className='absolute text-white font-semibold left-[7%] top-[53%]'>A thief who steals corporate secrets through the use of dream-sharing<br/> technology is given the inverse task of planting an idea into the mind<br/> of a C.E.O., but his tragic past may doom the project and his team to disaster</p>
                    <div className="herobtn absolute top-[65%] left-[7%]">
                        <div className=' flex gap-5 text-[14px] font-semibol d'>
                        <button className='flex bg-white items-center h-13 w-30 justify-center rounded-sm hover:bg-[#ffffffbf]'><img src={playIcon} className='w-6 h-6 mr-2' alt="" />Play</button>
                        <button className='flex bg-[#6d6d6eb3] text-white items-center h-13 w-30 justify-center rounded-sm hover:bg-[#6d6d6e66]'><img src={infoIcon} className='w-7 h-7 mr-2' alt="" />Info</button>
                        
                        </div>
                        </div>
                        
                        
                </div>
                
                <TitleCards/>
                <TitleCards/>
                <TitleCards/>
                <TitleCards/>
                <TitleCards/>

                <Footer/>
            </div>
        </>
    );
}

export default Home;
