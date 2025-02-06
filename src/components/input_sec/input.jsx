import "./input.scss";
import React from 'react'

const input = () => {
    return (
        <div className="input_sec container">
            <div className="input_title">
                <h1>Become a contributor?</h1>
                <p>Join us and get tips & tricks to become a great Designer and Developer</p>

            </div>
            <div className="input">
                <input type="email" placeholder="Enter your email" />
                <button>Join us</button>
            </div>

        </div>
    )
}

export default input