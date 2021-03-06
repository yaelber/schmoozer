#!/usr/bin/env node

const models = require('../models'); // models/index.js

const fixtures = require('../fixtures'); // fixtures/index.js

// force: true = drops the existing table
// sync: creates the table if it doesn't exist
models.users.sync({ force: true }).then(function() {

  fixtures.users.forEach(function(fixture) {
    models.users.create(fixture);
  });

//   models.profiles.sync({ force: true }).then(function() {
//     fixtures.profiles.forEach(function(fixture) {
//       models.profiles.create(fixture);
//     });
//   });

//   // create post_tags FIRST before creating its "children"
//   // (tags and posts)

//   models.post_tags.sync({ force: true }).then(function() {
//     fixtures.post_tags.forEach(function(fixture) {
//       models.post_tags.create(fixture);
//     });

//     models.tags.sync({ force: true }).then(function() {
//       fixtures.tags.forEach(function(fixture) {
//         models.tags.create(fixture);
//       });
//     });

//     models.posts.sync({ force: true }).then(function() {
//       fixtures.posts.forEach(function(fixture) {
//         models.posts.create(fixture);
//       });

//       models.comments.sync({ force: true }).then(function() {
//         console.log('begin seeding comments...');
//         fixtures.comments.forEach(function(fixture) {
//           models.comments.create(fixture);
//         });
//       });
//     });
  });
// });