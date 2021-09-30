import React, { Component } from "react";
import axios from 'axios';

import NewsApi from "../NewsApi"



class ListNews extends Component {

  constructor(props) {
    super(props);
    this.state = { newsLista: [] }
        
  }
  
  async componentDidMount(){
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    //const API_KEY = process.env.REACT_APP_API_KEY
    //const resp = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.data;
    this.setState({
        newsLista: data.results.slice(0,5)
    })
    console.log('componentDidMount');
    
}

  componentDidUpdate(prevProps, prevState){
       console.log('prevProps: ', prevProps, 'prevState: ', prevState)
       console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }



  render() {
    return (
    <div>
      <>
        <NewsApi lista={this.state.newsLista}></NewsApi>
      </>
      
    </div>
    );
  }
}

export default ListNews;
