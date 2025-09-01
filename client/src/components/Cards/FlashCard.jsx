import React, { useState } from 'react';
import './FlashCard.css'

const FlashCard = ({
    frontSide,
    backSide,
    backgroundColor = 'white',
    textColor = 'black'
}) => {
    const [isBack, setIsBack] = useState(false);

    const handleChangeSide = () => {
        setIsBack(prev => !prev);
    }
    return (
        <div className={`flashcard ${isBack ? 'is-back' : 'is-front'}`} onClick={handleChangeSide}>
            <div className='flashcard-inner' style={{color: textColor}}>
                <div className="flashcard-front" style={{background: backgroundColor}}>
                {frontSide}
                </div>
                <div className="flashcard-back" style={{background: backgroundColor}}>
                {backSide}
                </div>
            </div>
        </div>
    )
}
export default FlashCard;