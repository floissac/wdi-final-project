import React from 'react';
import Axios from 'axios';

import PlacesForm from './PlacesForm';

import Auth from '../../lib/Auth';

class PlacesEdit extends React.Component {
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

  componentDidMount() {
    Axios
      .get(`/api/countries/${this.props.match.params.id}`)
      .then(res => this.setState({ country: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const country = Object.assign({}, this.state.country, { [name]: value });
    this.setState({ country });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/countries/${this.props.match.params.id}`, this.state.country,
        {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
      .then(res => this.props.history.push(`/countries/${res.data.id}`))
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

export default PlacesEdit;
