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
        
      }
  }
        postSearch(search){
          this.setState({
            ytsearch: this.state.search
          })
          console.log()
        axios.post('/api/history', {
          searches: this.state.search
          
        })
        
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })}
                updateInput(input){
          this.setState({ search: input});
        }

        // componentDidMount(input){
        //   console.log('componentdidmountisrunning')
        //   axios.get('http://localhost:3535/api/youtubevideos').then(response => {
        //     this.setState({
        //       ytvideo: response.data,
        //     })
        //   }).catch((error) => {console.log(error)})
        // }
        // ytsearch(input){
        //   this.setState({ ytsearch: input})
        // }



        render(){
                  
            
          console.log(this.state)
        return (
        <div>
                <div className="App">
              <div className="App-header">
            <Link to='/'><h2 className="Header-title">allTube</h2></Link>
            <button className='signup buttontheme'> Sign in or Sign up </button>
            <a href={'http://localhost:3535/auth/logout'}><button className='logout buttontheme'> Logout </button> </a>
              </div>
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
