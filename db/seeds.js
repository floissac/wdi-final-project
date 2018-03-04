const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
// const Place      = require('../models/place');
const Country    = require('../models/country');
// const City       = require('../models/city');

Country.collection.drop();
// City.collection.drop();
// Place.collection.drop();

const countryData = [
  {
    name: 'England',
    image: 'https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2016/05/Best-Skateparks-in-the-UK.jpg',
    cities: [
      {
        name: 'London',
        image: 'https://coresites-cdn.factorymedia.com/kingpin_new/wp-content/uploads/2014/07/SAM4851.jpg',
        location: {
          lat: 51.5074,
          lng: 0.1278
        },
        places: [
          {
            title: 'dope spot',
            image: 'http://www.llsb.com/wp-content/uploads/2014/01/VikkiPhoto2-Sam.jpg',
            location: {
              lat: 40.432087,
              lng: 116.570375
            }
          },
          {
            title: 'Gnarly spot',
            image: 'http://www.iskatehere.com/media//1244088791_121522_FULL.jpg',
            location: {
              lat: 20.684295,
              lng: -88.567772
            }
          }
        ]
      },
      {
        name: 'Manchester',
        image: 'https://coresites-cdn.factorymedia.com/kingpin_new/wp-content/uploads/2014/07/SAM4851.jpg',
        location: {
          lat: 51.5074,
          lng: 0.1278
        },
        places: [
          {
            title: 'dope spot',
            image: 'http://www.llsb.com/wp-content/uploads/2014/01/VikkiPhoto2-Sam.jpg',
            location: {
              lat: 40.432087,
              lng: 116.570375
            }
          },
          {
            title: 'Gnarly spot',
            image: 'http://www.iskatehere.com/media//1244088791_121522_FULL.jpg',
            location: {
              lat: 20.684295,
              lng: -88.567772
            }
          }
        ]
      }
    ]
  }, {
    name: 'Brazil',
    image: 'https://s3.amazonaws.com/dsg.files.app.content.prod/gereports/wp-content/uploads/2014/11/13110217/Rio.jpg',
    cities: [
      {
        name: 'Rio',
        image: 'https://i.pinimg.com/originals/49/f3/f6/49f3f69a61267fb9ecced0d942c42372.jpg',
        location: {
          lat: 51.5074,
          lng: 0.1278
        },
        places: [
          {
            title: 'dope spot',
            image: 'https://image.redbull.com/rbcom/010/2014-11-24/1331691746154_2/0012/0/0/0/2000/3000/1500/1/sergio-munoz-frontside-flip-madrid-sergio-alvarez.jpg',
            location: {
              lat: 40.432087,
              lng: 116.570375
            }
          },
          {
            title: 'Gnarly spot',
            image: 'https://farm4.static.flickr.com/3047/2755462145_ed7ecfe95d_b.jpg',
            location: {
              lat: 20.684295,
              lng: -88.567772
            }
          }
        ]
      }
    ]
  }, {
    name: 'Spain',
    image: 'http://quartersnacks.com/wp-content/uploads/2011/08/bank-nieghborhood.jpg',
    cities: [
      {
        name: 'Rio',
        image: 'https://i.pinimg.com/originals/49/f3/f6/49f3f69a61267fb9ecced0d942c42372.jpg',
        location: {
          lat: 51.5074,
          lng: 0.1278
        },
        places: [
          {
            title: 'dope spot',
            image: 'https://image.redbull.com/rbcom/010/2014-11-24/1331691746154_2/0012/0/0/0/2000/3000/1500/1/sergio-munoz-frontside-flip-madrid-sergio-alvarez.jpg',
            location: {
              lat: 40.432087,
              lng: 116.570375
            }
          },
          {
            title: 'Gnarly spot',
            image: 'https://farm4.static.flickr.com/3047/2755462145_ed7ecfe95d_b.jpg',
            location: {
              lat: 20.684295,
              lng: -88.567772
            }
          }
        ]
      }
    ]
  }
];

// const placeData = [{
//   city: 'London',
//   country: 'England',
//   description: 'dope spot',
//   image: 'http://www.llsb.com/wp-content/uploads/2014/01/VikkiPhoto2-Sam.jpg',
//   location: {
//     lat: 40.432087,
//     lng: 116.570375
//   }
// },{
//   city: 'California',
//   country: 'USA',
//   description: 'Skatepark on the beach, sick!',
//   image: 'http://4.bp.blogspot.com/-a3xKlRWWu9w/UOOw1fo0TuI/AAAAAAAAD6I/Pwqg-Tln3Ck/s1600/_DSC0237.jpg',
//   location: {
//     lat: -22.951946,
//     lng: -43.210497
//   }
// },{
//   city: 'Rio de Jineiro',
//   country: 'Brazil',
//   description: 'Really cool local spot',
//   image: 'https://farm4.static.flickr.com/3047/2755462145_ed7ecfe95d_b.jpg',
//   location: {
//     lat: -13.163246,
//     lng: -72.544963
//   }
// },{
//   city: 'San Francisco',
//   country: 'USA',
//   description: 'Gnarly spot',
//   image: 'http://www.iskatehere.com/media//1244088791_121522_FULL.jpg',
//   location: {
//     lat: 20.684295,
//     lng: -88.567772
//   }
// },{
//   city: 'London',
//   country: 'England',
//   description: 'Crusty af but fun',
//   image: 'https://i.ytimg.com/vi/4GFIXrybfKg/maxresdefault.jpg',
//   location: {
//     lat: 41.890218,
//     lng: 12.492188
//   }
// },{
//   city: 'Barcelona',
//   country: 'Spain',
//   description: 'Barcelona, nuff said!',
//   image: 'http://quartersnacks.com/wp-content/uploads/2011/08/bank-nieghborhood.jpg',
//   location: {
//     lat: 27.175015,
//     lng: 78.042134
//   }
// },{
//   city: 'Barcelona',
//   country: 'Spain',
//   description: 'U already know',
//   image: 'http://quartersnacks.com/wp-content/uploads/2011/08/fondo-knobbed.jpg',
//   location: {
//     lat: 30.328473,
//     lng: 35.444373
//   }
// }];

mongoose.connect(db[env])
  .then(() => Country.create(countryData))
  .then(countries => console.log(`${countries.length} countries created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
