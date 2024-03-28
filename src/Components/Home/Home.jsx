import React from 'react';
import DinnerOption from '../Options/DinnerOption';
import Collections from '../Options/Collections';
import Localities from '../Options/Localities';
import AppPage from '../AppPage/AppPage';
import Explore from '../Explore/Explore';
import HeaderHome from '../Header/HeaderHome';
import HeaderImg from '../Header/HeaderImg';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div className='h-full bg-white'>
            <HeaderHome />
            <HeaderImg />
            <DinnerOption />
            <Collections/>
            <Localities />
            <AppPage />
            <Explore />
            <Footer />
        </div>
        
    );
}