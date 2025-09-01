import React, { useState } from 'react';
import FlashCard from './FlashCard'

const FlashCardRender = ({FlashCardData, index}) => {
    return <FlashCard {...FlashCardData} index={index}/>;

}
const FlashCardSection = ({title, flashcards}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? flashcards.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === flashcards.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className='flashcard-section' style={{maxWidth: '400px', margin: '0 auto'}}>
            <h1> </h1>
            <h2 style={{ textAlign: 'center'}}>{title}</h2>
            <div className="flashcard-carousel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <button onClick={handlePrev} style={{backgoundColor: 'white'}}>&lt;</button>

                <div className="flashcard-wrapper" style={{width: '300px',height: '200px'}}>
                <FlashCardRender
                    FlashCardData={flashcards[currentIndex]}
                    index={currentIndex}
                />
                </div>

                <button onClick={handleNext} style={{backgoundColor: 'white'}}>&gt;</button>
            </div>
        </div>
    )
}
export default FlashCardSection;