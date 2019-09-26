import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/movies/:imdbID" component={MovieDetails} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root'));