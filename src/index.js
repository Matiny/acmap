import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import Page from './pages';
import { HashRouter, Route, Link } from 'react-router-dom';


const Root = () => {
  return(
    <HashRouter>
      <div>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/game" component={Page}></Route>
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
