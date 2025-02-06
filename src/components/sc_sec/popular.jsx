import React, { Component } from 'react'
import Card from "../card/card";
import "./popular.css";

export class popular extends Component {

    render() {
        const data = [

            {
                id: 1,
                img: "./assets/imgs/figma.svg",
                title: "Figma",
                free: "free",
            },
            {
                id: 1,
                img: "./assets/imgs/figma.svg",
                title: "Notion",
                free: "prem",
            },
            {
                id: 1,
                img: "./assets/imgs/figma.svg",
                title: "vscode",
                free: "free",
            },


        ]
        return (


            <div className=' container' >
                <div className='Popular-text-sec'>
                    <h1>Popular tools</h1>
                    <p>Tools for the best Designers and Developers
                        most popularly used in the world</p>
                </div>



                <div className='cards_sec'>
                    {data.map((d) => <Card img={d.img} title={d.title} free={d.free} />)}
                </div>
                <div className='cards_sec'>

                    {data.map((d) => <Card img={d.img} title={d.title} free={d.free} />)}
                </div>
                <div className='btn'>
                    <button>Lead more</button>
                </div>
            </div>
        )
    }
}

export default popular