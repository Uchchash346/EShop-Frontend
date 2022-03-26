import React from 'react';
import NavBar from '../NavBar/NavBar';
import Notification from '../NotificationBar/Notification';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import TopNavigation from '../TopNavigation/TopNavigation';

const HomePage = () => {
    return (
        <>
            <Notification />
            <TopNavigation />
            <NavBar />
            <ProductCarousel />
        </>
    );
};

export default HomePage;