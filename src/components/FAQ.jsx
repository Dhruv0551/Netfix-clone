import React from 'react';
import img from '../assets/netflix-logo-png-2562.png'
import img1 from '../assets/what_is_netflix_1_en.png'
import img2 from '../assets/what_is_netflix_2_en.png'
import Footer from './Footer'
import './poppins.css'


function FAQ() {
  return (
    <>
      <div className='flex bg-black  h-16.5 w-[100%]'>
        <img src={img} alt="?" width={'95px'} className='h-7 mt-5 ml-40 cursor-pointer'/>
          <p className='h-7 mt-4 text-white text-xl ml-3 flex'>
            | 
              <a href='#' className='ml-4 cursor-pointer relative group'> 
                Help Center
                  <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all '></span>
              </a>
          </p>       
          <button className='cursor-pointer rounded-sm font-semibold ml-200 mt-4 h-8 w-30 border-2 border-solid border-[#373636] text-white transition-all duration-300 hover:border-white'>
            Join Netflix
          </button>
          <button className=' cursor-pointer text-sm text-white font-semibold bg-red-600 h-8 w-20 rounded-sm ml-3 mt-4 hover:bg-red-700'>Sign In</button>
      </div>
    <div className='w-[100%] flex'>
      <div className='w-[55%] ml-[10%] '>
        <div className='flex mt-[4%]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-[1.3%] ' viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          <p className='ml-2 text-[15px] mt-[-.5%] cursor-pointer hover:underline'>Back to Help Home</p>
        </div>
        <div className='mt-[4%]'>
          <p className='text-4xl font-bold'>What is Netflix?</p>
          <img src={img1} className='w-[100%] mt-[5%]' alt="Image not found" />
        </div>
        <div className='mt-[3%]  text-[17px]'>
        <p className='mb-[-1%]'>Netflix is a subscription-based <a href='#' className='text-red-600'> streaming service</a> that allows our members to watch TV shows and movies on an<br/> internet-connected device.</p><br/>
        <p><a href='#' className='text-red-600'>Depending on your plan</a>, you can also <a href='#' className='text-red-600'>download TV shows and movies</a> to your Android phone or tablet, iPhone, iPad, or Google Chromebook device and watch without an internet connection.</p>
        <p className='mt-[2%]'>If you're already a member and would like to learn more about using Netflix, visit <a href='#' className='text-red-600'>Getting started with Netflix.</a></p>
        </div>
        <hr className="my-20 h-0.5 bg-gray-200 rounded border-none" />
        <div className='mt-[4%]'>
          <p className='text-3xl font-semibold'>TV Shows & Movies</p>
          <img src={img2} className='w-[100%] mt-[5%]' alt="Image not found" />
        </div>
        <div className='mt-[3%]  text-[17px] mb-15'>
        <p className='mb-[-1%]'>Netflix content varies by region and may change over time. You can watch a variety of <a href='#' className='text-red-600'> award-winning Netflix originals, TV shows, movies, documentaries, and more.</a> </p><br/>
        <p>The more you watch, the better Netflix gets at <a href='#' className='text-red-600'>recommending</a> TV shows and movies.</p>
        </div>
        
        
      </div>

      {/* other part */}
      <div className='w-[35%]'>
        <div className='w-[55%] h-69 border-gray-300 border-t-red-600 border-1 mt-[40%] ml-[15%] border-t-6 rounded-sm'>
          <div className='text-xl font-semibold ml-[5%] mt-[3%]'>Related Articles</div>
          <div className='flex ml-[6%] mt-3'><svg className='w-4 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg><a className='text-[17px] underline ml-3 hover:underline' href='#'>Getting started with Netflix</a></div>
          <div className='flex ml-[6%] mt-3'><svg className='w-4 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg><a className='text-[17px] underline ml-3 hover:underline' href='#'>Billing and Payment</a></div>
          <div className='flex ml-[6%] mt-3'><svg className='w-4 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg><a className='text-[17px] underline ml-3 hover:underline' href='#'>Netflix Gift Card</a></div>
          <div className='flex ml-[6%] mt-3'><svg className='w-4 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg><a className='text-[17px] underline ml-3 hover:underline' href='#'>Can't Sign in into Netflix</a></div>
          <div className='flex ml-[6%] mt-3'><svg className='w-4 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#000000" d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg><a className='text-[17px] underline ml-3 hover:underline' href='#'>How to Create, Change or Delete Profiles</a></div>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default FAQ;