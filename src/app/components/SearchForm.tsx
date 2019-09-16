import React from 'react';
import './Styles.css';

interface IRoute {
  routeStart: string;
  routeEnd: string;
}

type SearchFormProps = {
  getRoutes: (e: React.FormEvent<HTMLFormElement>) => void;
  route: IRoute;
  handleRouteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({getRoutes, route, handleRouteChange}) => {
  return (
    <section className="search-form">
      <h1 className="search-form--title">Welcome to Routefinder!</h1>
      <h2 className="search-form--sub-title">To start please enter a start and end point for your route.</h2>
      <form onSubmit={getRoutes} className="search-form--wrapper">
        <div className="search-form--input">
          <label htmlFor="routeStart">
            Route Start Point:
          </label>
          <input type="text" className="search-form--input-field" name="routeStart" value={route.routeStart} onChange={handleRouteChange}></input>
        </div>
        <div className="search-form--input">
          <label htmlFor="routeEnd">
            Route End Point: 
          </label>
          <input type="text" className="search-form--input-field" name="routeEnd" value={route.routeEnd} onChange={handleRouteChange}></input>
        </div>
        <div className="search-form--submit">
          <input type="submit" className="search-form--submit-button" name="Submit"></input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;