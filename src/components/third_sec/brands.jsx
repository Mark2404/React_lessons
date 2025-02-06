
import React, { Component } from 'react'
import "./brand.css";

export class brands extends Component {
    render() {
        return (
            <div className='brands_box container'>
                <h3>Trusted more than 150+ brand</h3>
                <div className='brands'>
                    <img src="./assets/icons/brend1.svg" alt="" />
                    <img src="./assets/icons/brend2.svg" alt="" />
                    <img src="./assets/icons/brend3.svg" alt="" />
                    <img src="./assets/icons/brend4.svg" alt="" />
                </div>
            </div>
        )
    }
}

export default brands