import React, { Component } from 'react';
import { connect } from 'react-redux';


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {};
    render() {
        return ( 
        <RoomContext.Provider value="hello">
            {this.props.children}
        </RoomContext.Provider>
             
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export{ RoomProvider, RoomConsumer, RoomContext };