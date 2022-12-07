import React from 'react';
import './Header.css';
import Img from './Logo/logo.jpg';
import user from './Logo/user.png';

let url = 'https://www.gratispng.com/png-mkl3z7/'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href='/'>
                    <img src={Img} alt="MovieClub"></img>
                </a>
            </div>
            <div className="header--user">
                <a href='/'>
                    <img src={user} alt="Usuário"></img>
                </a>
            </div>
        </header>
    )
}