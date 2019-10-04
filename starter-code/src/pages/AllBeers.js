import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/all`).then(responseFromApi => {
      // console.log(responseFromApi);
      this.setState({
        listOfBeers: responseFromApi.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.listOfBeers.map(data => {
          // console.log(data);
          return (
            <div>
              <h1>{data.name}</h1>
              <p>{data._id}</p>
              <Link to={`/detail/${data._id}`}>
                <img src={data.image_url} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
