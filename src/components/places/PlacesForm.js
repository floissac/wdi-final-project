import React from 'react';

import BackButton from '../utility/BackButton';

function PlacesForm({ history, handleSubmit, handleChange, country}) {
  return (
    <div className="row">
      <h1>hi</h1>
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        {/* <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={country.name}
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={country.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="spot">Spot</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={country.place.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={country.place.image}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={place.location}
            onChange={handleChange}
          />
        </div> */}
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default PlacesForm;
