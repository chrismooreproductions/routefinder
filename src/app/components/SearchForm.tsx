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
    <form onSubmit={getRoutes} className="search-form">
      <input type="text" className="search-form--input" name="routeStart" value={route.routeStart} onChange={handleRouteChange}></input>
      <input type="text" className="search-form--input" name="routeEnd" value={route.routeEnd} onChange={handleRouteChange}></input>
      <input type="submit" className="search-form--input" name="Submit"></input>
    </form>
  )
}

export default SearchForm;