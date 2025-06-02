import React from 'react';
import './Footer.css'
import insta from './../assets/instagram_icon.png'
import fb from './../assets/facebook_icon.png'
import tw from './../assets/twitter_icon.png'
import yt from './../assets/youtube_icon.png'
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        
        <footer className="bg-black text-gray-400 py-8 h-[60vh]">
        <div className="container mx-auto px-4 mt-20">
          <div className="sm-button flex h-[3svh] gap-5 "><img src={insta} alt="" />
          <img src={tw} alt="" className='cursor-pointer' />
          <img src={fb} alt="" className='cursor-pointer' />
          <img src={yt} alt="" className='cursor-pointer' /></div>
          <div className="mb-6 mt-5">
            <span className="text-white">Questions? Call</span> <a href="#" className="text-white hover:underline">1-800-NETFLIX</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <ul className="space-y-2">
                <li><NavLink to="/faq" className="hover:underline">FAQ</NavLink></li>
                <li><a href="#" className="hover:underline">Account</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Ways to Watch</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><NavLink to="/help" className="hover:underline">Help Center</NavLink></li>
                <li><a href="#" className="hover:underline">Media Center</a></li>
                <li><a href="#" className="hover:underline">Investor Relations</a></li>
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
                <li><a href="#" className="hover:underline">Corporate Information</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Speed Test</a></li>
                <li><a href="#" className="hover:underline">Legal Notices</a></li>
                <li><a href="#" className="hover:underline">Only on Netflix</a></li>
                <li><a href="#" className="hover:underline">Gift Cards</a></li>
              </ul>
            </div>
          </div>
          <div>
            <p>Netflix United States</p>
            <p className="mt-4">© 2025 Netflix, Inc.</p>
          </div>
        </div>
      </footer>
            
    );
}

export default Footer;