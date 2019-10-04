import React, { Component } from "react";

import axios from "axios";
// import { Link } from "react-router-dom";

export default class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneBeer: {}
      // oneBeer:{} a ver si te pregunto esto
    };
  }
  componentDidMount() {
    console.log(this.props);

    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/single/${params.id}`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        const oneBeer = responseFromApi.data;
        this.setState(oneBeer);
        // this.setState(oneBeer:responseFromApi.data);
      });
  }
  render() {
    return (
      <div>
        {/* <h1>{this.oneBeer.name}</h1>
        <img src={this.oneBeer.image_url} />
        <h2>{this.oneBeer.tagline}</h2> */}
        <h1>{this.state.name}</h1>
        <h2>{this.state.tagline}</h2>
        <p>
          
          {this.state.contributed_by}
        </p>
        <img src={this.state.image_url} />
      </div>
    );
  }
}
