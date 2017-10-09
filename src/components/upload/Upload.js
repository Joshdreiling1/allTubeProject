import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Upload.css'
import uploadlogo from '../../assets/uploadlogo.png'
import loadingbar from '../../assets/loading-bar.gif'

export default class Upload extends Component {
    render(){
        return (
            <div>
            <div className="App">
            <div className="App-header">
            <Link to='/'><h2 className="Header-title">allTube</h2></Link>
            <button className='signup'> Sign in or Sign up </button>
            <a href={'http://localhost:3535/auth/logout'}><button className='logout'> Logout </button> </a>
            </div>
            <div className='uploadpreview'>
                <h2> Upload here </h2>
                <div className='uploadpreviewbox'>
                <img className='uploadvideo' src= {uploadlogo} alt='' />
            <div className='uploadinput'>
                <h3> Title </h3>
                    <input />
                <h3> Description </h3>
                    <input />
                <h3> Tags </h3>
                    <input />
                <select>
                    <option> Select </option>
                    <option> Youtube </option>
                    <option> Vimeo </option>
                    </select>
                </div>
                <button className='uploadbutton'>
                    Upload 
                </button>
                <div>
                <h2 className='progresstitle'> Progress </h2>
                </div>
            <div className='uploadprogress'>
                <img className='progressbar' src ={loadingbar} alt=''/>
                </div>

  
                </div>
                </div>
          </div>
        </div>
   

        )
    }
}