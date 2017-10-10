import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Upload.css'
import loadingbar from '../../assets/loading-bar.gif'
import snapchatlogo from '../../assets/snapchatlogo.png'
import githublogo from '../../assets/25231.png'

export default class Upload extends Component {
    render(){
        return (
            <div>
            <div className="App">
            <div className="App-header">
            <Link to='/'><h2 className="Header-title">allTube</h2></Link>
            <button className='signup buttontheme'> Sign in or Sign up </button>
            <a href={'http://localhost:3535/auth/logout'}><button className='logout buttontheme'> Logout </button> </a>
            </div>
            <div className='uploadpreview'>
                <h2> Upload here </h2>
                <input /> <button className ='buttontheme'>Choose File</button>
                <div className='uploadpreviewbox'>
                <h3> Upload preview </h3>
                </div>
                <div>
            <div className='uploadinput'>
                <h3> Title </h3>
                    <input className='input' />
                <h3> Description </h3>
                    <input className='descinput' />
                <h3> Tags </h3>
                    <input className='input'/>
                    <p> Select a source </p>
                <select>
                    <option> Select </option>
                    <option> Youtube </option>
                    <option> Vimeo </option>
                    </select>
                </div>
                <button className='buttontheme uploadbtn'>
                    Upload 
                </button>
            <div className='uploadprogress'>
                <img className='progressbar' src ={loadingbar} alt=''/>
                </div>

  
                </div>
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