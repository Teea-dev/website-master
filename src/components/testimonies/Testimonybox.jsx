import React from 'react';
import { BsFillStarFill } from 'react-icons/bs'

const Testimonybox = (props) => {
    return (
    <div className="testimonie-box">
        <h2>So Informative!</h2>
        <p>{props.content}</p>
        <div className="rating-container">
            <h3 className='clicked'>4.0</h3>
            <div>
                <BsFillStarFill className='clicked'/>
                <BsFillStarFill className='clicked'/>
                <BsFillStarFill className='clicked'/>
                <BsFillStarFill className=''/>
                <BsFillStarFill className=''/>
            </div>
        </div>
        <div className='line'></div>
    </div>
    )
}

export default Testimonybox;