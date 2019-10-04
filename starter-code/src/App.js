import React, { Component } from 'react';
import Home from "./pages/Home"
import './App.css';
import{Switch,Route } from "react-router-dom";
import AllBeers from "./pages/AllBeers"
import BeerDetail from "./pages/BeerDetail"
class App extends Component {
  constructor(){
    super()
    this.state={
      beers:[],
      newBeer:""
    }
  }
  render() {
    return (
      <div className="App">
       <Switch>
         
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
           <Route exact path="/detail/:id" component={BeerDetail} />
          {/* <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={AddNewBeer} /> */} */}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
