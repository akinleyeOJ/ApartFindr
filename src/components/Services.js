import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

            },
            {
                icon:<FaHiking />,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

            },
            {
                icon:<FaShuttleVan />,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

            },
            {
                icon:<FaBeer />,
                title:"free cocktails",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"

            }
        ]
    };
    render() {
        return (
           <section className="services">
                <Title title="services" />
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
