import React,{ useEffect,useState } from 'react'
import './App.css';
import './Quote.css'
import axios from 'axios'





const App = ()=>{
  
  const [quote,setQuote] = useState("")
  const [author,setAuthor] = useState("")

  const quoteApi = async ()=>{
    let quoteArray = []
    try{
      const data = await axios.get("https://api.quotable.io/random")
     
      quoteArray = data.data
      console.log(quoteArray)
    }catch(error){  
      console.log(error)
    }

    try {
      setQuote(quoteArray.content)
      setAuthor(quoteArray.author)      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    quoteApi()
  },[])
  return (
    <div className="App">
      <div className="quotebox" >
        <div className="quotecontainer">
          <h5 className="author">{author}</h5>
          <h3 className="quote">"{quote}"</h3>
          <button className="quotebutton" onClick={quoteApi}>Another</button>
        </div>
      </div>
    </div>
  )
}

export default App;
