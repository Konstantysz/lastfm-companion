import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AlbumGrid from './components/AlbumGrid';
import TopTrackTable from './components/TopTracksTable';
import { NaviBar } from './components/NavigationBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

class App extends Component {

  render() {
    return (
      <>
        <NaviBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/topalbums' component={AlbumGrid} />
            <Route path='/weeklychart' component={TopTrackTable} />
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App
