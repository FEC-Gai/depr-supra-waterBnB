var faker = require('faker');
var randomId = require('randomatic');

var generateHostProfiles = () => {
  var hostProfiles = [];
  var localhost = 'http://localhost:3006';
  var languages = ['English', 'French', 'Spanish', 'Chinese', 'German', 'Tamil', 'Russian', 'Japanese'];

  var getRandomLangIndex = () => {
    return Math.floor(Math.random() * languages.length);
  }

  for (var i = 1; i < 101; i++) {
    hostProfiles.push({
      "_id": i,
      "host_url": `${localhost}/users/show/${i}`,
      "host_name": faker.name.firstName(),
      "host_about": faker.lorem.paragraph(),
      "host_messages": faker.lorem.sentence(),
      "host_identity_verified": faker.random.boolean(),
      "host_is_superHost": faker.random.boolean(),
      "host_has_profile_pic": faker.random.boolean(),
      "host_has_coHost": faker.random.boolean(),
      "host_response_time": faker.random.number({'min': 98, 'max': 100}),
      "host_listings_count": faker.random.number({'min': 1, 'max': 5}),
      "host_verifications": [faker.internet.email(), faker.phone.phoneNumber(), randomId('0000', 4)],
      "host_languages": [languages[getRandomLangIndex()], languages[getRandomLangIndex()]],
    });

  }

  return hostProfiles;
};

module.exports = generateHostProfiles;