import React, { useState } from 'react';
import './App.css';
import { RouteFinder } from '../services/RouteFinder';
import { IRouteFinderResponse } from '../types/RouteFinder';
import { waypoints } from '../app/data';
import { RouteFinderConstants } from '../app/constants';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';
import NoResults from './components/NoResults';

const App: React.FC = () => {
  const defaultValidRoute = (): IRouteFinderResponse => (
    {
      message: '',
      isValidRoute: false,
      waypoints: [],
      totalDistance: 0
    }
  );

  const [edges] = useState(waypoints);
  const [route, setRoute] = useState({routeStart: '', routeEnd: ''});
  const [validRoute, setValidRoute] = useState<IRouteFinderResponse>(defaultValidRoute);
  const [viewState, setViewState] = useState(RouteFinderConstants.INITIALISATION);

  const getRoutes = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const routeFinder = new RouteFinder(edges);
    const validRoute: IRouteFinderResponse = routeFinder.findRoutes(route.routeStart, route.routeEnd);
    if (validRoute.isValidRoute) {
      setValidRoute(validRoute);
      setViewState(RouteFinderConstants.SEARCH_RESULTS);
    } else {
      setValidRoute(validRoute);
      setViewState(RouteFinderConstants.NO_RESULTS);
    }
  }

  const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setRoute({
      ...route,
      [event.target.name]: event.target.value
    });
  }

  const renderSearchResults = () => {
    if (viewState === RouteFinderConstants.SEARCH_RESULTS) { 
      return (
        <SearchResults validRoute={validRoute} />
      )
    }
    if (viewState === RouteFinderConstants.NO_RESULTS) {
      return (
        <NoResults validRoute={validRoute} />
      )
    }
    return null;
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
