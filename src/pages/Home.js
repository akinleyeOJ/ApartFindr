import React from "react";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import Naira from 'react-naira';
import FeaturedRooms from '../components/FeaturedRooms';
import Footer from '../components/Footer'


export default function Home() {
    return ( 
        <>
        <Hero>
            <Banner title="Luxurious Apartments" subtitle="deluxe rooms starting at #300,000">
                <Link to="/rooms" className="btn-primary">Apartments
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        <Footer />
        </>
    );
    
}