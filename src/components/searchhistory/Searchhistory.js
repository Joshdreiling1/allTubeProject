import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Searchhistory.css'
import axios from 'axios'
export default class History extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            history: []
            
        }
    }
   componentDidMount(){
       axios.get('http://localhost:3535/api/history').then(response => {
           this.setState({
               history: response.data
            })  
         
     })

    }
    render(){
        var searchhistory = this.state.history.map(function(search){
            return (
               <div className='innerfriends' >                              
                       <div className='searches'>
                       {search.searches}</div>                  
               </div>
                   
               )
           })
        
        return (
            <div>
            <div className="App">
            <div className="App-header">
            <Link to='/'><h2 className="Header-title">allTube</h2></Link>
            <button className='signup'> Sign in or Sign up </button>
            </div>
            <h1> You recently searched for: </h1>
            <button > View history </button>
            <div>
                {searchhistory}
                </div>
          </div>
        </div>
   

        )
    }
}
