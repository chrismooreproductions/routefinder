import React from 'react';
import { IRouteFinderResponse } from '../../types/RouteFinder';

type SearchResultProps = {
  validRoute: IRouteFinderResponse;
}

const renderTotalDistance = (validRoute) => {
    return (
      <div>Total Journey Distance: {validRoute.totalDistance}</div>
    )
}

const SearchResults: React.FC<SearchResultProps> = ({validRoute}) => {
  return (
    <section className="search-results">
      {validRoute.waypoints.map(edge => {
        return (
          <div className="search-results--row" key={validRoute.waypoints.indexOf(edge)}>
            <div className="search-results--edge">
              <p><strong>Leg {validRoute.waypoints.indexOf(edge) + 1}:</strong> {edge.node1} -> {edge.node2}</p>
            </div>
            <div className="search-results--distance">
              <p><strong>Distance:</strong> {edge.weight}</p>
            </div>
          </div>
        )}
      )}
      <div className="search-results--row search-results--total">
        Total Journey Distance: {validRoute.totalDistance}
      </div>
    </section>
  )
}

export default SearchResults;
