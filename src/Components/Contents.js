import React, { Component } from 'react';
import Home from './Home';



export default class Contents extends Component {

/*     constructor(props) {
        super(props)
        
    } */
    
    render() {
        return (
            <div className="content">
                <div className="wrap-content">
                    
                    <Home data="all"/>
                </div>
            </div>
        )
    }



}