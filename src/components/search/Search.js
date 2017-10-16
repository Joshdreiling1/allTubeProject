import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import snapchatlogo from '../../assets/snapchatlogo.png'
import githublogo from '../../assets/25231.png'

export default class Search extends Component {
  constructor() {
    super()
      this.state = {
        search: '',
        ytvideo: [],
        ytsearch: '',
        vimeosearch: ''
      }
  }
        postSearch(search){
          this.setState({
            ytsearch: this.state.search,
            vimeosearch: this.state
            
          })
          console.log()
        axios.post('/api/history', {
          searches: this.state.search
          
        })
                  axios.get('/api/vimeo', {
            ytvideo: this.state.vimeosearch
        })
        
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })}
                updateInput(input){
          this.setState({
             search: input
            });
        }
        searchVimeo(search){
          this.setState({
            vimeosearch: search
          })
          axios.get('/api/vimeo', {
            ytvideo: this.state.vimeosearch
        })
      }

        render(){
                  
          console.log(this.state)
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

                        </div> </div>
                 </div> 
                <div className='inputbox'>
                <input onChange={(e) => this.updateInput(e.target.value)}></input> 
                <button className='searchbutton buttontheme' onClick={() => this.postSearch()}> Search </button>
                <div> 
                  </div>
                <div>
<iframe className='youtubebox'
  title="player"
  width="35%"
  height="350"
  src={"https://www.youtube.com/embed?listType=search&list=" + this.state.ytsearch}
  allowFullScreen
  frameBorder="1"
  list="20">
  
</iframe>

<iframe className='vimeobox'
title="player"
  width="35%"
  height="350"
  src={"https://player.vimeo.com/video/" + this.state.ytsearch}
  allowFullScreen
  frameBorder="1"
  list="1">
  </iframe>
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
