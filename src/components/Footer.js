import React from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer, FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
     <footer className="footer-distributed">
  <div className="footer-left">
    <h3>Company<span>logo</span></h3>
    <p className="footer-links">
	<a href="/" class="link-1">Home </a>
					
					<a href="/rooms">Apartments</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
				
    </p>
    <p className="footer-company-name">ApartFindr © 2020</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
    </div>
    <div>
    <i className="fa fa-envelope" />
      <p>+234 806 901 2426</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:apartfindr@gmail.com">apartfindr@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>Advertise With Us</span>
Advertise/Market Your Property
Featured Real Estate Companies
Place Banner Adverts

+2348069012426
    </p>
    <div className="footer-icons">
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaTwitterSquare/></a>
      <a href="#"><FaInstagram /></a>
    </div>
  </div>
</footer>


		
    );
};

export default Footer