import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CountriesIndex from './CountriesIndex';
import CitiesIndex from  './CitiesIndex';
import PlacesNew from './PlacesNew';
import PlacesEdit from './PlacesEdit';

const PlacesRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CountriesIndex} />
      <Route path="/countries/new" component={PlacesNew} />
      <Route path="/countries/:id/edit" component={PlacesEdit} />
      <Route path="/countries/:id" component={CitiesIndex} />
    </Switch>
  );
};

export default PlacesRoutes;
