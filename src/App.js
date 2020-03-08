import React from 'react';
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

const userName = [
  'konstantysz7',
  'etiennedoerr',
  'arsalla',
  'plnwslwsk'
]

class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     city: undefined,
  //     country: undefined
  //   };
  // }

  // Asynchronously fetching jsons file from the API
  componentDidMount() {
    Promise.all([
      fetch(`${api.base}?method=user.getTopAlbums&user=${userName[0]}&api_key=${API_KEY}&limit=50&format=json`).then(val => val.json()),
      fetch(`${api.base}?method=user.getWeeklyTrackChart&user=${userName[0]}&api_key=${API_KEY}&limit=50&format=json`).then(val => val.json())
    ]).then(([topalbumresult, songchartresult]) => {

      // Changes state of App component asigning values from json file
      this.setState({
        topalbums: topalbumresult,
        songchart: songchartresult
      })

    }).catch((err) => {
      console.log(err); // Any error cought in fetching with API is going to be displayed at console
    })
  }

  render() {
    return (
      <>
        <NaviBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              path='/topalbums'
              render={() => 
                (typeof this.state.topalbums !='undefined') ? (
                  <AlbumGrid topalbums={this.state.topalbums}/>
                ) : (<></>)}
            />
            <Route
              path='/weeklychart'
              render={() => <TopTrackTable songchart={this.state.songchart}/>}
            />
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App
