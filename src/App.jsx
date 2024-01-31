
import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {


  state = { jokeContent: " " , status : ""}

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get("https://hindi-jokes-api.onrender.com/jokes?api_key=f6f1427cee62ebc8dfb047c0f281")
      .then((response) => {

        const { jokeContent } = response.data;
        const { status } = response.data;
       console.log(response.data);
        this.setState({ jokeContent , status})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
   
    const { jokeContent, } = this.state;
    const { status } = this.state;
    return (
       <div className="app">
        <div className="card">
          <h1 className="heading">{jokeContent}</h1>
          <h1 className='heading'>{status}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>click here!</span>
          </button>
        </div>
       </div>
      
    )
  }
}

export default App
