import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import uploadlogo from '../../assets/uploadlogo.png'
import searchlogo from '../../assets/searchlogo.png'

export default class Home extends Component {
    
    render(){
        return (
            <div className="App">
                <div className="App-header">
                    <Link to='/'><h2 className="Header-title">allTube</h2></Link>
                    <a className='auth0' href={'http://localhost:3535/auth' }>
                     <button className='signup'> Sign in or Sign up </button> </a>
                    <a href={'http://localhost:3535/auth/logout'}><button className='logout'> Logout </button> </a>
                     <h2 className='motto'> The only way </h2>
                     <Link to='/Searchhistory'>
                     <button className='historybtn'> View History </button>
                     </Link>
                </div>
                <div>
                    <div className='upload'>
                        <h2> Upload </h2>
                        <Link to='/upload'>  <img className='uploadlogo' src= {uploadlogo} alt='' /></Link>
                    </div>
                    <div className='searchbox'>
                    <h2> Search </h2>
                    <Link to= '/search'>
                     <img className='searchlogo' src={searchlogo} alt=''/>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}