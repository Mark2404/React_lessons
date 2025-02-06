import "./footer.scss";
import React from 'react'

const footer = () => {
    return (
        <footer>
            <div className='footer_sec container'>

                <div className="footer_links footer-logo">
                    <div>
                        <img src="./assets/icons/logo.svg" alt="" />
                        <p>Antols</p>
                    </div>
                    <p className='copyright' href="#">Copyright 2021. Antools</p>
                    <p className="description">Antool is a web collection of information on paid or free Design and Development tools</p>
                </div>
                <div className="footer_links">
                    <p className="links_title">Contact Us</p>
                    <a href="#">+621987463</a>
                    <a href="#">M Building, No.10 A</a>
                    <a href="#">antools@awesome.com</a>
                </div>
                <div className="footer_links">
                    <p className="links_title">Categories</p>
                    <a href="#">Desighn</a>
                    <a href="#">Develop</a>
                </div>
                <div className="footer_links">
                    <p className="links_title">Company info</p>
                    <a href="#">About us</a>
                    <a href="#">Our partners</a>
                    <a href="#">Blog</a>
                </div>
            </div>
        </footer>

    )


}

export default footer