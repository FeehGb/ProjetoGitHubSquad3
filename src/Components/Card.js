import React, { Component } from 'react';

export default class Cards extends Component {

    constructor(props) {
        super(props)
        this.data = props.data
        console.log(this.data)
    }


    render() {
        return (
            <div className="card">
                <div className="wrap-card">
                    
                    <div className="card-header">{this.data['name']} </div>
                    <div className="card-content">
                        
                        {this.data['html_url']}
                        
                        <div className="language">{this.data['language']}</div>
                    </div>
                    <div className="card-fotter"></div>
                    
                </div>
            </div>
        )
    }



}
