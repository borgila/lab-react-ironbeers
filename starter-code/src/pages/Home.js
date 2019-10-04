import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="Home">
            <li>
              <Link to="/beers">
                <img src="/images/beers.png" alt="All Beers" />
              </Link>
              <h2>All Beers</h2>
              <p>,todas las birras del mundo,todas las birras del mundo</p>
            </li>
            <li>
              <Link to="/random-beer">
                <img src="/images/random-beer.png" alt="Random Beer" />
              </Link>
              <h2>Random Beer</h2>
              <p>Math random de un listado de birras,Math random de un listado de birras</p>
            </li>
            <li>
              <Link to="/new-beer">
                <img src="/images/new-beer.png" alt="New Beer" />
              </Link>
              <h2>New Beer</h2>
              <p>Crea tu birra,Crea tu birra</p>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
