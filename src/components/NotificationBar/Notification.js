import React from 'react';
import './Notification.css';

const Notification = () => {
    return (
        <div>
            <div className="alert notification-area text-center" role="alert">
                <p className="alert-text-area">Get 45% Offer in any product 😃 <a className="alert-link" href="/offer" class="alert-link">CLICK HERE</a>.</p>
            </div>
        </div>
    );
};

export default Notification;