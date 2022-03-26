import React from 'react';
import './TopNavigation.css';
import { AiOutlineSafety } from 'react-icons/ai';

const TopNavigation = () => {
    return (
        <div className="top-navigation-main-area">
            <div className="container">
                <div className="top-navigation-area ">
                    <a className="p-2 nav-link-area" href="/about">About Us</a>
                    <a className="p-2 nav-link-area" href="/account">My account</a>
                    <a className="p-2 nav-link-area" href="/wish">Wishlist</a>
                    <a className="p-2 nav-link-area" href="/order-tracking">Order Tracking</a>
                </div>
                <div className="top-navigation-area">
                    <p className="mx-5"><AiOutlineSafety className="secure-icon" />100% secure delivery without contacting the courier</p>
                </div>
                <div className="top-navigation-area mx-5">
                    Need Help? Call US: <span>+0020500</span>
                </div>
                <div className="top-navigation-area dropdown ">
                    <div className="btn-group ml-5">
                        <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                        </button>
                        <ul className="dropdown-menu">
                            <li>English</li>
                            <li>Spanish</li>
                            <li>German</li>
                        </ul>
                    </div>
                </div>
                <div className="top-navigation-area dropdown">
                    <div className="btn-group mx-2">
                        <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            BDT
                        </button>
                        <ul className="dropdown-menu">
                            <li>BDT</li>
                            <li>CAD</li>
                            <li>GBT</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavigation;