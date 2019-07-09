import React, { Component } from 'react';


export default class Footer extends Component {

    constructor(props) {

        super(props)

    }


    render() {
        return (
            <footer>
                <div className="footer-content">
                    {this.props.title}
                </div>
            </footer>
        )
    }



}