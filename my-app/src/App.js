import React, {Components } from 'react';
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Footer from "./components/footer"

export default class App extends Components {
 render() {
  return (
   <>
   <Header/>
   <Sidebar/>
   <Footer/>
     </>
  );
 }
}
