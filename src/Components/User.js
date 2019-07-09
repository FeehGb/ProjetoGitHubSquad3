import React, { Component } from 'react'
import Request              from '../rest/Request'
import Card                 from './Card'
export default class User extends Component {
    
    constructor( props ) {
        super(props);
        
        console.log(props)
        this.state = { 
            user        : {} ,
            repos       : [] ,
            value       : '' ,
            className   : '' ,
        }
        this.getDataUser    = this.getDataUser.bind(this)
        this.getDataRepos   = this.getDataRepos.bind(this)
        this.setValue       = this.setValue.bind(this)
    }
    
    setValue( event ) {
        
        let value = event.target.value
        this.setState({ value });
        
    }
    
    setError({className, info}) {
        this.setState({
            className,
            info
            
        })
        
        
        
        
    }
    isEmpty() {
        if ( !this.state.value ) {
            this.setError({"info":"Preencha corretamente os campos", "className":"input-error"})
            return false
        }
    } 
    
    async getDataRepos(event) {
        event.preventDefault()
        if ( this.isEmpty() )
            return
            
        //https://api.github.com/users/FeehGb/repos
        let data =  new Request({ service: `/users/${this.state.value}/repos` }) 
        await data.then((response) => {
            console.log(response)
            
            if ( response.status === 200 ) {
                
                this.setState({
                    
                    repos : response.data
                    
                })
                
            }
        
        })
        
    }
    
    
    
    
    async getDataUser(event) {
        event.preventDefault();
        
        if ( this.isEmpty() )
            return
        
        
        let data =  new Request({ service: `/users/${this.state.value}` })
        await data.then((response) => {
            console.log(response)
            
            if ( response.status === 200 ) {
                
                let dataState = response.data
                if ( this.props.data !== 'all') {
                    dataState = dataState[this.props['data']]
                } 
                
                
                this.setState({
                    "user"        : dataState ,
                    "className"   : "input-success"
                })
            }
            
        
        }).catch(err => {
            let data ={}
            if ("message" in err)
                data = { "info":err["message"], "className" : "input-error"}
            else {
                data = { "info":"error grave contacte o suporte", "className" : "input-error"}
            }
                
            this.setError(data) 
        
            
        });
        
        
    }
    
    render() {
        
        const keys = Object.keys(this.state.user)
        
        return (
            <div className="User">
                
                
                <form>
                    <div data-info={this.state.info} className={this.state.className + " field"}>
                        
                        <input  autoComplete="false" placeholderhide="" placeholder=" " value={this.state.value} onChange={this.setValue} type="text" id="userName" />
                        <label htmlFor="userName">Usuário</label>
                        <button onClick={this.getDataUser}> Carregar </button>
                        
                    </div>
                    
                    <div className="user-data">
                        <p>Bem vindo {this.state.user['name']} o que gostaria de fazer</p>
                            <div className="field">
                            <button onClick={this.getDataRepos}> Ver repositorios </button> 
                            <button > Criar repositorios </button> 
                        </div>
                    </div>
                </form>
                
                
                
                
                <ul className="list">
                    {keys.map( (key,index) => (
                        <li className="item" key={index}><b className="key">{key}</b> <div className="item-data"> {this.state.user[key]} </div></li>
                    ))}
                </ul>
                
                <div className="grid-cards">
                    {this.state.repos.map((item, key) => <Card data={item} key={key} />
                    
                    
                    )}
                </div>
                
            </div>
        )
    }
    
    /*  
    
    
    
                
    componentDidMounts() {
        
        let data = new Request({ service: `/users/${this.props.name}` })
        data.then((response) => {
        
            const data = response.data[this.props.data]
            console.log(response)
            this.setState({ data });
            
        }).catch(err => console.log(err));
        
    } */
}

