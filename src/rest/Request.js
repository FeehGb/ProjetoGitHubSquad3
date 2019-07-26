import React, { Component } from 'react'
import axios from 'axios';


/**
 * 
 * Classe Generica para trabalhar com request
 * A principio usando apenas GET e POST
 * 
 */
class Request extends Component {
    
    /**
     * 
     * @param {url, method, get, data, headers} params
     */
    constructor(){
        
        /* this.uri = 'https://api.github.com'
        let url  = this.uri + service
        
        return this.doRequest({url , method , data , headers})
         */
        super()
        
        this.state = {
            
                data        : []
            ,   isLoading   : true
            ,   hasError    : false
            
        }
        
    }
    
    
    componentDidMount(){
        
        const {  config :{ method="get", data={} , headers={} }, url } = this.props
        
        console.log(this.props)
        try {
            return this.doRequest({ url , method , data , headers })
                //.then(response => response)
                .then(data => this.setState({ data, isLoading: false }))
        }
        catch (e) {
            this.setState({ isLoading: false, hasError: true })
        }
        
    }
    
    render(){
        
        
        if (this.state.hasError) 
            return <h1>Um erro aconteceu e não foi possível fazer o fetch!</h1>
        
        if (this.state.isLoading) 
            return <h1>Loading...</h1>
        
        return (
            <div className='character'>
                {this.props.render(this.state.data)}
            </div>
        )
    }
    
    /**
     * 
     * @description method para fazer a requisicao de acordo com o method passado
     * @param { url, method, data, headers }  `objeto destructing args`
     * @param url    { String } url da requisicao
     * @param method { String } metodo que sera usado na requisicao `default` get
     * @param data   { Object } dados que serao enviado junto a requisicao, udado apenas no metodo Post
     * @param headers{ Object } dados do cabecalho a serem passado junto com a requisicao
     * 
     */
    doRequest({url , method , data , headers}){
        
        //return new Promise((resolve, reject) => {
            
            //resolve(
        return this[method]({url, data, headers})
            //)
            //reject()
            
            
        //})

    }
    
    /**
     * @description Metodo para o tratamento get caso tenha alguma particularidade
     * @param {url, headers} params 
     */
    get({url, headers}){
        return axios.get(url,{headers})
    }
    
    /**
     * @description Metodo para o tratamento post caso tenha alguma particularidade
     * @param {url, headers} params 
     */
    post({url, data, headers}){
        return axios.post(url, data, {headers})
    }
    
    

}


export default Request

