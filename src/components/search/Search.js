import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Search extends Component {
  constructor() {
    super()
      this.state = {
        search: '',
        ytvideo: []
        
      }
  }
        postSearch(search){

        axios.post('http://localhost:3535/api/history', {
          search: this.state.search
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })}
        // axios.get('https://swapi.co/api/people/').then(response => {
        //   this.setState({
        //     name: response.data.results[random].name
        //   })
        // })



        updateInput(input){
          this.setState({ search: input, ytvideosearch: input });
        }
        componentDidMount(){
          axios.get('http://localhost:3535/api/youtubevideos').then(response => {
            this.setState({
              ytvideo: response.data
            })
          })
        
        }

        render(){
          var ytresults = this.state.ytvideo.map(function(ytvideo){
            return (
              <div className='ytresults'>
                <div>
                  {ytvideo}
                  </div>
                  </div>
                  
            )
          })
          console.log(this.state)
        return (
        <div>
                <div className="App">
              <div className="App-header">
            <Link to='/'><h2 className="Header-title">allTube</h2></Link>
            <button className='signup'> Sign in or Sign up </button>
              </div>
                 </div> 
                <div className='inputbox'>
                <input onChange={(e) => this.updateInput(e.target.value)}></input> 
                <button className='searchbutton' onClick={() => this.postSearch()}> Search </button>
                    </div>
                    {ytresults}
         </div>

        )
    }
}