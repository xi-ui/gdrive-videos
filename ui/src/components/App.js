import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import './App.css';
import TalkList from "./talks/TalkList";
import TalkShow from "./talks/TalkShow";
import Header from "./Header";
import history from "../history";

function App() {
  return (
    <div className="App">
      <div className={'ui container'}>
        <Router history={ history }>
          <div>
            <Header />
            <Switch>
              <Route path={'/'} exact component={TalkList} />
              <Route path={'/talks/show/:id'} exact component={TalkShow} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
