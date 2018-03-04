import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CountriesIndex from './CountriesIndex';
import CitiesIndex from  './CitiesIndex';
import CitiesShow from './CitiesShow';
import PlacesShow from './PlacesShow';
import PlacesNew from './PlacesNew';
import PlacesEdit from './PlacesEdit';


const PlacesRoutes = () => {
  return (
    <Switch>
      <Route path="/countries/:countryId/cities/:cityId/places/:placeId" component={PlacesShow} />
      <Route path="/countries/:countryId/cities/:cityId" component={CitiesShow} />
      <Route path="/countries/:countryId/cities/:cityId/places/:id" component={PlacesEdit} />
      <Route path="/countries/new" component={PlacesNew} />
      <Route path="/countries/:id" component={CitiesIndex} />
      <Route exact path="/" component={CountriesIndex} />
    </Switch>
  );
};

export default PlacesRoutes;
