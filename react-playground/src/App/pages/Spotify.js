import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class Spotify extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
        spotifyApi.setAccessToken(token);
    }
    this.state = {
        loggedIn: token ? true : false,
    }
  }

  componentDidMount() {
      const params = this.getHashParams();
      console.log(params);
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render() {
    return (
      <div className="App">
            <Link to={'http://localhost:8888'}>
                <button variant="raised" disabled={this.state.loggedIn}>
                    Authorize Spotify
                </button>
            </Link>
      </div>
    );
  }
}

export default Spotify;