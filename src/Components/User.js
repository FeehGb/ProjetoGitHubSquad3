import React, { Component } from 'react';
import Request from '../rest/Request'


/**
 * 
 * Component User - consome dados do usuario no GitHub
 * 
 */
export default class User extends Component {
    
    constructor(props){
        super(props);
        
        console.log(props)
        this.state = { 
            data: ''
        }
    }
    
    render() {
        return (
            <div>
                {this.props.data} = {this.state.data}
            </div>
        )
    }
    
    componentDidMount() {
        
        let data = new Request({ service: `/users/${this.props.name}` })
        data.then((response) => {
            
            
            const data = response.data[this.props.data]
            console.log(response)
            this.setState({ data });
            
        }).catch(err => console.log(err));
        
    }
}

