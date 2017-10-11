import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Myvids.css'
import snapchatlogo from '../../assets/snapchatlogo.png'
import githublogo from '../../assets/25231.png'
import axios from 'axios'

export default class Myvids extends Component {
    constructor() {
        super()
        this.state = {
            myVids: [],
            dropdown: '',
            input: ''
        }
    }
   componentDidMount(){
       axios.get('/api/uploads', {
           headers: {
             withCredentials: true
            }}).then(response => {
           this.setState({
               myVids: response.data,
            })  
     })
    }
    updateSource(input){
        this.setState({
            dropdown: input
        })
    }
    render(){
    var videos = this.state.myVids
    .filter((vid) => {
         var userInput = this.state.input.toLowerCase();
         var title = vid.title.toLowerCase();
         var source = vid.source.toLowerCase();

         return title.startsWith(userInput) 
    })
    .filter((vid) => {
        if(this.state.dropdown === ''){
            return vid
       } else {
      return vid.source === this.state.dropdown
       }
    })

     .map(function(vid){
            return (
               <div className='vids'>                              
                       <div >
                        {[vid.title,', on ', vid.source]}
                        </div>               
                       <div className='vidpreview'>
                        <p className='previewtext'>Preview</p>
                        </div>
               </div>   
               )
           })
        

        return (
            <div className="App">
                <div className="App-header">
                    <Link to='/'><h2 className="Header-title">allTube</h2></Link>
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
                    <h2 className='videoTitlePage'> Your Videos </h2>
                    <div className="filter">
            
                <input onChange={(e) => {
                    this.setState({
                        input: e.target.value
                    })
                }}  placeholder="search"></input>
                <select onChange={(e) => this.updateSource(e.target.value)}>
                    <option value=''>Source</option>
                    <option onClick={()=>{this.setState({dropdown:'Youtube'})}} value='Youtube'>Youtube</option>
                    <option onClick={()=>{this.setState({dropdown:'Vimeo'})}} value='Vimeo'>Vimeo</option>
                </select>
                </div>
                
                <div className='videopage'>
                    {videos}
                    </div>
                <div className='footer'>
                <Link to='/about'><ul className='listfont'> About this Website </ul></Link>
                <Link to='/terms'><ul className='listfont'> Terms of Service </ul></Link>
                   <ul> Hit me up on:</ul>
               <a href='https://www.snapchat.com/add/joshdreiling7'> <img className='socialmedia'src={snapchatlogo} alt=''/> </a> <a href='https://github.com/Joshdreiling1'><img className='socialmedia'src={githublogo} alt=''/> </a>

                    </div>
            </div>
            </div>
        )
    }
}