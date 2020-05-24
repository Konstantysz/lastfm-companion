import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AlbumGrid from './components/AlbumGrid';
import TopTrackTable from './components/TopTracksTable';
import { NaviBar } from './components/NavigationBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

import API_KEY from './config.json'

const api = {
  key: API_KEY,
  base: "https://ws.audioscrobbler.com/2.0/"
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      topalbums: undefined,
      songchart: undefined,
      error: false
    };
  }

  getData = async e => {
    e.preventDefault()

    const user = e.target.elements.user.value

    if(user) {

      Promise.all([
        fetch(`${api.base}?method=user.getTopAlbums&user=${user}&api_key=${api.key}&limit=50&format=json`).then(val => val.json()),
        fetch(`${api.base}?method=user.getWeeklyTrackChart&user=${user}&api_key=${api.key}&limit=50&format=json`).then(val => val.json())
      ]).then(([topalbumresult, songchartresult]) => {
        // Changes state of App component asigning values from json file
        this.setState({
          topalbums: topalbumresult,
          weeklytrackchart: songchartresult
        })

      }).catch((err) => {
        console.log(err); // Any error cought in fetching with API is going to be displayed at console
      })
    } else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <>
        <NaviBar getData={this.getData} error={this.state.error}/>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/topalbums'
              render={() => 
                (typeof this.state.topalbums !='undefined') ? (
                  <AlbumGrid topalbums={this.state.topalbums}/>
                ) : ('')}
            />
            <Route
              path='/weeklychart'
              render={() => 
                (typeof this.state.weeklytrackchart !='undefined') ? (
                  <TopTrackTable weeklytrackchart={this.state.weeklytrackchart}/>
                ) : ('')}
            />
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App