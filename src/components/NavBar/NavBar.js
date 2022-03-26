import React from 'react';
import './NavBar.css';
import mainLogo from "../../images/site-logo.png"
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBagFill } from 'react-icons/bs';


const NavBar = () => {
    return (
        <div className="container pt-3">
            <div className="row align-items-center">
                <div className="col">
                    <img className="site-logo" src={mainLogo} alt="" />
                </div>
                <div className="col">
                    <div className="input-group nav-search-input-area">
                        <input type="text" className="form-control" placeholder="Search your products" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><BsSearch /></button>
                    </div>
                </div>
                <div className="col">
                    <AiOutlineUser className="user-icon" />
                </div>
                <div className="col">
                    <p className="total-amount">$0.00</p>
                </div>
                <div className="col">
                    <p className="total-amount"><a href="/"><BsBagFill className="cart-icon" /></a></p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;