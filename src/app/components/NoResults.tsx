import React from 'react';
import { IRouteFinderResponse } from '../../types/RouteFinder';

type NoResultProps = {
  validRoute: IRouteFinderResponse;
}

const NoResults: React.FC<NoResultProps> = ({validRoute}) => {
  return (
    <section className="search-results search-results__no-results">
      <div className="search-results--row">
        {validRoute.message}
      </div>
    </section>
  )
}

export default NoResults;
