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
            form: [],
            filebox: '',
            description: '',
            tags: ''
          }
      }
            postVid(form){
            axios.post('/api/uploads', {
                title: this.state.title,
                source: this.state.source
            })
            alert('Your video has been uploaded!')
            this.setState({
                title: '',
                source: '',
                filebox: '',
                description: '',
                tags: ''
            })
        }
            updateTitle(input){
                this.setState({
                   title: input
                });
            
            }
            updateDescription(input){
                this.setState({
                   description: input
                });
            }
            updateTags(input){
                this.setState({
                   tags: input
                });
            }
            updateSource(input){
                this.setState({
                    source: input
                })      
    }

            updateFile(input){
                this.setState({
                    filebox: input
                })
            }

    render(){

        
        return (
            <div>
            <div className="App">
            <div className="App-header">
            <Link to='/'><h2 className="Header-title">AllTheVideos</h2></Link>
            <a className='auth0' href={process.env.REACT_APP_LOGIN }>
            <button className='signup buttontheme'> Sign in or Sign up </button> </a>
           <a href={process.env.REACT_APP_LOGOUT}><button className='logout buttontheme'> Logout </button> </a>
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
                <input type='file' className='buttontheme' onChange={(e) => this.updateFile(e.target.value)} /> 
                <div className='uploadpreviewbox'>
                <h3> Upload preview </h3>
                </div>
                <div>
            <div className='uploadinput'>
                <h3> Title </h3>
                    <input value={this.state.title} onChange={(e) => this.updateTitle(e.target.value)} placeholder='Title your video!' className='input' />
                    {console.log(this.state)}
                <h3> Description </h3>
                    <input value={this.state.description} placeholder='Tell the world about your video!' className='descinput' onChange={(e) => this.updateDescription(e.target.value)} />
                <h3> Tags </h3>
                    <input value={this.state.tags} className='input' placeholder='These mean nothing nowadays' onChange={(e) => this.updateTags(e.target.value)}/>
                    <p> Select a source </p>
                <select onChange={(e) => this.updateSource(e.target.value)}>
                    <option value=''>  Select </option>
                    <option value="Youtube" > Youtube </option>
                    <option value="Vimeo"> Vimeo </option>
                    </select>
                </div>
               <button className='buttontheme uploadbtn' onClick={() => this.postVid()}>Upload</button>


  
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