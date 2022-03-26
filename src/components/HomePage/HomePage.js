import React from 'react';
import NavBar from '../NavBar/NavBar';
import Notification from '../NotificationBar/Notification';
import TopNavigation from '../TopNavigation/TopNavigation';

const HomePage = () => {
    return (
        <>
            <Notification />
            <TopNavigation />
            <NavBar />
        </>
    );
};

export default HomePage;