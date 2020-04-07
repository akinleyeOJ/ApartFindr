import React, { Component } from 'react';
import { RoomContext } from "../context";
import Loading from "./loading";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const { FeaturedRooms: rooms } = this.context;
        console.log(rooms);

        return   <div>
                helloo <Loading />
            </div>
        
    }
}

