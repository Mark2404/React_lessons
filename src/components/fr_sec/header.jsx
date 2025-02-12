import React, { Component } from "react";
import './header.css';
export class header extends Component {
    render() {
        return (
            <main>
                <header className="container">
                    <nav>
                        <div className="logo">
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="38" height="38" rx="8" fill="#FF6E30" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9645 12.4359C19.632 12.4359 19.3089 12.4769 19 12.5541C19.1988 10.7606 19.9148 9.12396 20.9963 7.7949C25.2971 8.30462 28.6332 11.9645 28.6332 16.4029V22.7294C28.4605 22.7391 28.2864 22.744 28.1112 22.744C24.6706 22.744 21.6709 20.8483 20.1028 18.0423H23.9315V16.4029C23.9315 14.212 22.1554 12.4359 19.9645 12.4359Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25642 16.9507C9.25642 11.625 13.5738 7.30765 18.8995 7.30765C21.5623 7.30765 23.9731 8.38698 25.7182 10.132C24.1095 8.52339 21.9351 7.48047 19.5191 7.32727C17.894 9.12579 16.9044 11.5095 16.9044 14.1243C16.9044 14.3194 16.9099 14.5132 16.9208 14.7055C16.299 15.2539 15.9068 16.0565 15.9068 16.9507V17.6157H21.8922L17.5214 17.6158C18.9445 21.4968 22.672 24.2662 27.0462 24.2662C27.5546 24.2662 28.0543 24.2288 28.5425 24.1566V28.2564H21.8922V24.2661H15.9068V28.2564H9.25642V20.9409V16.9507Z" fill="white" />
                            </svg>
                            <h1>Antols</h1>
                        </div>
                        <div className="links">
                            <a href="#">Home</a>
                            <a href="#">Categories</a>
                            <a href="#">My collection</a>
                            <a href="#">Blog</a>


                        </div>
                        <div className="nav_buttons">
                            <a href="#">Login</a>
                            <button>Sign up</button>
                        </div>


                    </nav>
                </header>
                <div className="with_int_sec container">
                    <div>

                        <div>
                            <h1>Awesome tools for
                                Designer & Developer.</h1>
                            <p>Antool is a web collection of information on paid or free Design and Development tools</p>
                        </div>

                        <div className="search">
                            <input type="text" name="" id="" placeholder="Search..." />
                            <button>search</button>
                        </div>
                        <div className="icons">
                            <img src="./assets/imgs/feysbuk.svg" alt="" />
                            <img src="./assets/imgs/insta.svg" alt="" />
                            <img src="./assets/imgs/twitter.svg" alt="" />
                        </div>
                    </div>
                    <img src="./assets/imgs/bg.svg" alt="" />
                </div>

            </main>

        )
    }
}

export default header