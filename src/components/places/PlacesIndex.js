import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class CountriesIndex extends React.Component {
  state = {
    cities: []
  }

  componentWillMount() {
    Axios
      .get('/api/countries')
      .then(res => this.setState({ cites: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <Link to="/countries/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Place
            </Link>}
          </div>
          {this.state.countries.map(country => {
            return(
              <div key={country.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/countries/${country.id}`}>
                  <p>{country.name}</p>
                  <img src={country.image} className="img-responsive" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesIndex;
