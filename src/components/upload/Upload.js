import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Upload.css'
import snapchatlogo from '../../assets/snapchatlogo.png'
import githublogo from '../../assets/25231.png'
import axios from 'axios'

export default class Upload extends Component {
    constructor() {
        super()
          this.state = {
            title: '',
            source: '',
            form: []
          }
      }
            postVid(form){
              this.setState({
                form: [this.state.title, this.state.source]   
              })
              alert('Upload Sucessful')
            axios.post('/api/uploads', {
                title: this.state.title,
                source: this.state.source
            })
        }
            updateTitle(input){
                this.setState({
                   title: input
                });
            
            }
            updateSource(input){
                this.setState({
                    source: input
                })      
    }

    render(){
        return (
            <div>
            <div className="App">
            <div className="App-header">
            <Link to='/'><h2 className="Header-title">AllTheVideos</h2></Link>
            <a className='auth0' href={'http://localhost:3535/auth' }>
            <button className='signup buttontheme'> Sign in or Sign up </button> </a>
            <a href={'http://localhost:3535/auth/logout'}><button className='logout buttontheme'> Logout </button> </a>
            <h2 className='motto'> The only way </h2>
                        <div className='navbar'>
                        <Link to ='/upload'><ul className='listfont'> Upload </ul></Link>
                        <Link to ='/search'><ul className='listfont'> Search </ul></Link>
                       <Link to ='/Searchhistory'> <ul className='listfont'> View Search History </ul></Link>
                       <Link to='/myvideos'> <ul className='listfont'> My Videos </ul></Link>
                        </div>
            </div>
            <div className='uploadpreview'>
                <h2> Upload here </h2>
                <input  /> <button className ='buttontheme'>Choose File</button>
                <div className='uploadpreviewbox'>
                <h3> Upload preview </h3>
                </div>
                <div>
            <div className='uploadinput'>
                <h3> Title </h3>
                    <input onChange={(e) => this.updateTitle(e.target.value)} className='input' />
                    {console.log(this.state)}
                <h3> Description </h3>
                    <input className='descinput' />
                <h3> Tags </h3>
                    <input className='input'/>
                    <p> Select a source </p>
                <select onChange={(e) => this.updateSource(e.target.value)}>
                    <option value="" >  Select </option>
                    <option value="Youtube" > Youtube </option>
                    <option value="Vimeo"> Vimeo </option>
                    </select>
                </div>
               <button className='buttontheme uploadbtn' onClick={() => this.postVid()}>
                    Upload 
                </button>


  
                </div>
                </div>
          </div>
          <div className='footer'>
          <Link to='/about'><ul className='listfont'> About this Website </ul></Link>
          <Link to='/terms'><ul className='listfont'> Terms of Service </ul></Link>
                   <ul> Hit me up on:</ul>
               <a href='https://www.snapchat.com/add/joshdreiling7'> <img className='socialmedia'src={snapchatlogo} alt=''/> </a> <a href='https://github.com/Joshdreiling1'><img className='socialmedia'src={githublogo} alt=''/> </a>

                    </div>
        </div>
   

        )
    }
}