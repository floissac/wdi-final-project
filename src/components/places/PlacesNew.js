import React from 'react';
import Axios from 'axios';

import PlacesForm from './PlacesForm';
import Auth from '../../lib/Auth';

class PlacesNew extends React.Component {
  state = {
    name: '',
    image: '',
    cities: [
      {
        name: '',
        image: '',
        location: {
          lat: '',
          lng: ''
        },
        places: [
          {
            title: '',
            image: '',
            location: {
              lat: '',
              lng: ''
            }
          },
          {
            title: '',
            image: '',
            location: {
              lat: '',
              lng: ''
            }
          }
        ]
      }
    ]

  };

  handleChange = ({ target: { name, value } }) => {
    const country = Object.assign({}, this.state.country, { [name]: value });
    this.setState({ country });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/countries', this.state.country, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }})
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <PlacesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        country={this.state.country}
      />
    );
  }
}

export default PlacesNew;
