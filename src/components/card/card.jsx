import React from 'react'

function card({ title, free }) {

    return (
        <div div className="card" >
            <div className='card_top'>
                <img src="./assets/imgs/figma.svg" alt="Figma Logo" className="logo" />
                <div>
                    <h2>{title}</h2>
                    <span className="free">{free}</span>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="icons">
                <img src="./assets/imgs/heart.svg" alt="" />
                <img src="./assets/imgs/folder.svg" alt="" />
                <a href="#" className="visit">
                    Visit
                </a>
            </div>

        </div >
    )
}

export default card