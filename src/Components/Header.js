import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <header>
                <div className="wrap-header">
                    <h3>{this.props.title}</h3>
                </div>
            </header>
        )
    }



}
