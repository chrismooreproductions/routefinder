import React, { useState } from 'react';
import './App.css';
import { RouteFinder } from '../services/RouteFinder';
import { IRouteFinderResponse } from '../types/RouteFinder';
import { waypoints } from '../app/data';
import { CONSTANTS } from '../app/constants';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';
import NoResults from './components/NoResults';
const logo = require('../logo.svg');

const App: React.FC = () => {
  // Use hooks to manage state...
  const [edges, setEdges] = useState(waypoints);
  const [route, setRoute] = useState({routeStart: '', routeEnd: ''})
  const [validRoute, setValidRoute] = useState()
  const [viewState, setViewState] = useState(CONSTANTS.ROUTE_FINDER.INITIALISATION)

  const getRoutes = (e): void => {
    e.preventDefault();
    const routeFinder = new RouteFinder(edges);
    const validRoute: IRouteFinderResponse = routeFinder.findRoutes(route.routeStart, route.routeEnd);
    if (validRoute.isValidRoute) {
      setValidRoute(validRoute);
      setViewState(CONSTANTS.ROUTE_FINDER.SEARCH_RESULTS);
    } else {
      setValidRoute(validRoute);
      setViewState(CONSTANTS.ROUTE_FINDER.NO_RESULTS);
    }
  }

  const handleRouteChange = (e) => {
    e.preventDefault()
    setRoute({
      ...route,
      [e.target.name]: e.target.value
    })
  }

  const renderSearchResults = () => {
    if (viewState === CONSTANTS.ROUTE_FINDER.SEARCH_RESULTS) { 
      return (
        <SearchResults validRoute={validRoute} />
      )
    }
    if (viewState === CONSTANTS.ROUTE_FINDER.NO_RESULTS) {
      return (
        <NoResults validRoute={validRoute} />
      )
    }
  }

  return (
    <div className="App">
      <SearchForm
        getRoutes={getRoutes}
        route={route}
        handleRouteChange={handleRouteChange}
      />
      {renderSearchResults()}
    </div>
  );
}

export default App;
