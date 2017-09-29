// import React, { Component, PropTypes } from 'react'
// import {Link} from 'react-router-dom'
// import axios from 'axios'
// let loadYT

// export default class Search extends Component {
//   constructor() {
//     super()
//       this.state = {
//         search: '',
//         ytvideo: []
        
//       }
//   }
//           postSearch(search){

//         axios.post('http://localhost:3535/api/history', {
//           search: this.state.search
//         })
//         .then(function (response) {
        
//           console.log(response)
//         })
//         .catch(function (error) {
//           console.log(error)
//         })}

//         updateInput(input){
//           this.setState({ search: input});
//         }
//         componentDidMount(){
//           console.log('componentdidmountisrunning')
//           axios.get('http://localhost:3535/api/youtubevideos').then(response => {
//             console.log('asdas')
//             this.setState({
//               ytvideo: response.data
//             })
//           }).catch((error) => {console.log(error)})
        
//         }
//   componentDidMount () {
//     if (!loadYT) {
//       loadYT = new Promise((resolve) => {
//         const tag = document.createElement('script')
//         tag.src = 'https://www.youtube.com/iframe_api'
//         const firstScriptTag = document.getElementsByTagName('script')[0]
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
//         window.onYouTubeIframeAPIReady = () => resolve(window.YT)
//       })
//     }
//     loadYT.then((YT) => {
//       this.player = new YT.Player(this.youtubePlayerAnchor, {
//         height: this.props.height || 390,
//         width: this.props.width || 640,
//         videoId: this.props.YTid,
//         events: {
//           onStateChange: this.onPlayerStateChange
//         }
//       })
//     })
//   }

//   onPlayerStateChange = (e) => {
//     if (typeof this.props.onStateChange === 'function') {
//       this.props.onStateChange(e)
//     }
//   }

//   render () {
//     return (
//       <div>
//               <div>
//                 <div className="App">
//               <div className="App-header">
//             <Link to='/'><h2 className="Header-title">allTube</h2></Link>
//             <button className='signup'> Sign in or Sign up </button>
//               </div>
//                  </div> 
//                 <div className='inputbox'>
//                 <input onChange={(e) => this.updateInput(e.target.value)}></input> 
//                 <button className='searchbutton' onClick={() => this.postSearch()}> Search </button>
//                     </div>
          
//          </div>
//       <section className='youtubeComponent-wrapper'>
//         <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
//       </section>
//       </div>
//     )
//   }
// }

// Search.propTypes = {
//   YTid: PropTypes.string.required,
//   width: PropTypes.number,
//   height: PropTypes.number,
//   onStateChange: PropTypes.func
// }
