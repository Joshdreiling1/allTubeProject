import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Searchhistory.css'
import axios from 'axios'
import snapchatlogo from '../../assets/snapchatlogo.png'
import githublogo from '../../assets/25231.png'


export default class History extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            history: []
            
        }
    }
   componentDidMount(){
       axios.get('/api/history', {
           headers: {
             withCredentials: true
            
            
            
            }}).then(response => {
           this.setState({
               history: response.data
            })  
         
     })

    }
    render(){
        var searchhistory = this.state.history.map(function(search){
            return (
               <div >                              
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
            <button className='signup buttontheme'> Sign in or Sign up </button>
            <a href={'http://localhost:3535/auth/logout'}><button className='logout buttontheme'> Logout </button> </a>
            </div>
            <h1 className='recenttext'> You recently searched for: </h1>
            <div className='historybox'>
                {searchhistory}
                </div>
          </div>
          <div className='footer'>
                   <ul> About this Website </ul>
                   <ul> Terms of Service </ul>
                   <ul> Hit me up on:</ul>
               <a href='https://www.snapchat.com/add/joshdreiling7'> <img className='socialmedia'src={snapchatlogo} alt=''/> </a> <a href='https://github.com/Joshdreiling1'><img className='socialmedia'src={githublogo} alt=''/> </a>

                    </div>
        </div>
   

        )
    }
}
