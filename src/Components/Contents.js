import React, { Component } from 'react';
import User from './User';



export default class Contents extends Component {

    constructor(props) {
        super(props)
        
    }
    
    
    

    render() {
        return (
            <div className="content">
                <div className="wrap-content">
                    
                    <User data="all"/>
                </div>
            </div>
        )
    }



}