import axios from 'axios';


/**
 * 
 * Classe Generica para trabalhar com request
 * A principio usando apenas GET e POST
 * 
 */
export default class Request {
    
    /**
     * 
     * @param {url, method, get, data, headers} params
     */
    constructor({service , method = "get", data = {}, headers = {}}){
        
        this.uri = 'https://api.github.com'
        let url  = this.uri + service
        
        return this.doRequest({url , method , data , headers}) 
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
    async doRequest({url , method , data , headers}){
        
        console.log(url)
        let req =  await this[method]({url, data, headers})
        return req
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
        return axios.get(url, data, {headers})
    }
    
    

}


