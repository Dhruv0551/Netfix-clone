import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cards_data from '../assets/cards/Cards_data';
import './TitleCards.css';

function TitleCards({ title }) {
    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    };

    useEffect(() => {
        const cardsList = cardsRef.current;
        cardsList.addEventListener('wheel', handleWheel);
        return () => {
            cardsList.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className='title-cards ml-[7%] pt-[80px] text-white'>
            <h2 className='text-3xl font-semibold mb-5'>Popular on Netflix</h2>
           
            <div className="card-list flex gap-[10px] overflow-x-auto" ref={cardsRef}>
                {cards_data.map((card, index) => (
                    <div className="card relative flex-none" key={index} style={{ width: '240px' }}>
                        <img 
                            src={card.image} 
                            className='w-full rounded-sm cursor-pointer' 
                            alt={card.name || 'Netflix card'} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

TitleCards.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TitleCards;
