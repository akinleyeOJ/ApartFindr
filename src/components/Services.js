import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail />,
                title:"What we stand for",
                info: "We have created a free, simpler, convenient and effective way for apartment hunters to find their next property"

            },
            {
                icon:<FaHiking />,
                title:"Perks",
                info: "Up-to-date property information, available for free, accessible 24 hours a day to anyone with internet access and far more complete in terms of number of properties and depth of detail on each property than through other traditional advertising media."

            },
            {
                icon:<FaShuttleVan />,
                title:"Direct Contact With Seller",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

            },
           
        ]
    };
    render() {
        return (
           <section className="services">
                <Title title="What We Offer" />
             <div className="services-center">
                 {this.state.services.map((item,index) => {
                     return ( 
                     <article key={index} className="service">
                         <span>{item.icon}</span>
                         <h6>{item.title}</h6>
                         <p>{item.info}</p>
                     </article>
                 );
                 })}

             </div>
            </section>
        );
    }
}
