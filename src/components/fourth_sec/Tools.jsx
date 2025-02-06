import React from 'react'
import Card from "../card/card";
import "./tools.css";


function Tools() {
    return (
        <div className='Tools_sec container'>
            <div className='text'>
                <h1>Newcomer Tools</h1>
                <p>Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
                <button>See more</button>
            </div>
            <div className='tools-cards'>
                <div className='right_site-cards'>
                    <Card title="Figma" free="free" />
                    <Card title="Figma" free="free" />
                </div>
                <div className='right_site-cards'>
                    <Card title="Figma" free="free" />
                    <Card title="Figma" free="free" />
                </div>

            </div>
        </div>
    )
}

export default Tools